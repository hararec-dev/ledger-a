import { Platform, Linking, Share } from 'react-native';
import * as RNFS from 'react-native-fs';
import { Buffer } from 'buffer';
import { nativeSaveExcelFileWithSAF } from '../helpers';


export const writeFile = async (filePath: string, data: string, encoding: 'base64' | 'utf8' | 'ascii'): Promise<void> => {
    await RNFS.writeFile(filePath, data, encoding);
};

export const getFilePath = (fileName: string): string => {
    const finalName = fileName.endsWith('.xlsx') ? fileName : `${fileName}.xlsx`;
    const paths = {
        android: `${RNFS.DownloadDirectoryPath}/${finalName}`,
        ios: `${RNFS.DocumentDirectoryPath}/${finalName}`,
    };
    return Platform.OS === 'android' ? paths.android : paths.ios;
};

export const fileExists = async (filePath: string): Promise<boolean> => {
    return RNFS.exists(filePath);
};

export const openFile = async (filePath: string): Promise<void> => {
    const url = Platform.OS === 'ios' ? filePath : `file://${filePath}`;
    await Linking.openURL(url);
};

export const shareFile = async (filePath: string, message: string = 'Share this file'): Promise<void> => {
    const url = Platform.OS === 'ios' ? filePath : `file://${filePath}`;
    await Share.share({ url, message });
};

export const bufferToBase64 = (data: string, fromEncoding: 'binary' | 'utf8' = 'binary'): string => {
    return Buffer.from(data, fromEncoding).toString('base64');
};

export const saveExcelFileWithSAF = async (
    fileName: string,
    base64data: string
): Promise<string> => {
    if (Platform.OS === 'android') {
        return nativeSaveExcelFileWithSAF(fileName, base64data);
    } else {
        const filePath: string = getFilePath(fileName);
        const dirPath = filePath.split('/').slice(0, -1).join('/');
        await RNFS.mkdir(dirPath);
        await writeFile(filePath, base64data, 'base64');
        await syncIOSFile(filePath);
        return filePath;
    }
};

export const syncIOSFile = async (filePath: string): Promise<void> => {
    if (Platform.OS === 'ios') { await RNFS.scanFile(filePath); }
};
