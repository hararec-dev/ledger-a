import { NativeModules, Platform } from 'react-native';
import { getFilePath, writeFile } from '../helpers';


export const nativeSaveExcelFileWithSAF = async (
    fileName: string,
    base64data: string
): Promise<string> => {
    if (Platform.OS !== 'android') {
        const filePath: string = getFilePath(fileName);
        await writeFile(filePath, base64data, 'base64');
        return filePath;
    }
    if (NativeModules.SAFModule) {
        return NativeModules.SAFModule.saveFile(fileName, base64data);
    }
    throw new Error('Storage Access Framework no disponible');
};
