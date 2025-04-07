package com.ledger_a

import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.util.Base64
import androidx.annotation.Nullable
import com.facebook.react.bridge.*
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.modules.core.DeviceEventManagerModule
import java.io.OutputStream

class SAFModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), ActivityEventListener {

    // Código de solicitud para el intent de creación de documento
    private val REQUEST_CODE_CREATE_DOCUMENT = 1001

    // Variables para almacenar la promesa y los datos que se deben escribir
    private var fileSavePromise: Promise? = null
    private var base64Data: String? = null
    private var fileName: String? = null

    init {
        reactContext.addActivityEventListener(this)
    }

    override fun getName(): String {
        return "SAFModule"
    }

    /**
     * Este método se llama desde JavaScript para iniciar el proceso de guardar el archivo.
     * @param fileName: Nombre sugerido para el archivo.
     * @param base64Data: Datos del archivo en formato base64.
     * @param promise: Promesa para resolver o rechazar la operación.
     */
    @ReactMethod
    fun saveFile(fileName: String, base64Data: String, promise: Promise) {
        val currentActivity = currentActivity ?: run {
            promise.reject("NO_ACTIVITY", "Actividad no disponible")
            return
        }
    
        this.fileSavePromise = promise
        this.base64Data = base64Data
        this.fileName = fileName
    
        try {
            Intent(Intent.ACTION_CREATE_DOCUMENT).apply {
                addCategory(Intent.CATEGORY_OPENABLE)
                type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                putExtra(Intent.EXTRA_TITLE, fileName)
            }.also { intent ->
                currentActivity.startActivityForResult(intent, REQUEST_CODE_CREATE_DOCUMENT)
            }
        } catch (e: ActivityNotFoundException) {
            promise.reject("INTENT_NOT_HANDLED", "No hay aplicaciones para manejar documentos")
        } catch (e: SecurityException) {
            promise.reject("SECURITY_ERROR", "Permisos insuficientes", e)
        } catch (e: Exception) {
            promise.reject("UNKNOWN_ERROR", "Error inesperado", e)
        }
    }

    /**
     * Se invoca cuando la actividad retorna un resultado.
     */
    override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, @Nullable data: Intent?) {
        if (requestCode == REQUEST_CODE_CREATE_DOCUMENT) {
            if (resultCode == Activity.RESULT_OK && data != null) {
                val uri: Uri? = data.data
                if (uri != null && base64Data != null) {
                    try {
                        val outputStream: OutputStream? = activity?.contentResolver?.openOutputStream(uri)
                        if (outputStream != null) {
                            // Decodificamos el string base64 a bytes
                            val fileBytes: ByteArray = Base64.decode(base64Data, Base64.NO_WRAP)  // Changed from DEFAULT to NO_WRAP
                            outputStream.write(fileBytes)
                            outputStream.flush()  // Add flush before closing
                            outputStream.close()
                            // Resolvemos la promesa retornando el URI como string
                            fileSavePromise?.resolve(uri.toString())
                        } else {
                            fileSavePromise?.reject("WRITE_ERROR", "No se pudo abrir el OutputStream")
                        }
                    } catch (e: Exception) {
                        fileSavePromise?.reject("ERROR_WRITE", e)
                    }
                } else {
                    fileSavePromise?.reject("NO_URI", "No se obtuvo un URI válido")
                }
            } else {
                fileSavePromise?.reject("CANCELED", "Operación cancelada por el usuario")
            }
        }
    }

    override fun onNewIntent(intent: Intent?) {
        // No se requiere implementación en este caso.
    }

    @ReactMethod
    fun isAvailable(promise: Promise) {
        // Siempre disponible desde API 19 (nuestro minSdk es 24)
        promise.resolve(true)
    }
}
