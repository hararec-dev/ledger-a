import { Platform } from 'react-native';
import { Buffer } from 'buffer';
import XLSX from 'xlsx';
import { getFilePath, saveExcelFileWithSAF, syncIOSFile, writeFile } from '@helpers';
import type { ExcelOptions, ExcelRow, ExcelSheetData } from '@types';


const createExcelWorkbook = (data: ExcelRow[]): XLSX.WorkBook => {
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  return wb;
};

export const writeWorkbookToFile = async (wb: XLSX.WorkBook, fileName: string): Promise<string> => {
  const options: ExcelOptions = {
    type: 'buffer',
    bookType: 'xlsx',
    compression: true,
  };
  const wbout: ArrayBuffer = XLSX.write(wb, options) as ArrayBuffer;
  const base64data = Buffer.from(wbout).toString('base64');
  return Platform.select({
    android: saveExcelFileWithSAF(fileName, base64data),
    ios: (async () => {
      const filePath: string = getFilePath(fileName);
      await writeFile(filePath, base64data, 'base64');
      await syncIOSFile(filePath);
      return filePath;
    })(),
  }) as Promise<string>;
};

export const generateExcelFile = async (
  data: ExcelRow[],
  fileName: string = 'data.xlsx'
): Promise<string | void> => {
  try {
    const wb: XLSX.WorkBook = createExcelWorkbook(data);
    return await writeWorkbookToFile(wb, fileName);
  } catch (error: unknown) { }
};

export const generateExcelFileWithSheets = async (
  sheets: ExcelSheetData,
  fileName: string = 'data.xlsx'
): Promise<string | void> => {
  try {
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    Object.entries(sheets).forEach(([sheetName, data]) => {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });
    return await writeWorkbookToFile(wb, fileName);
  } catch (error: unknown) { }
};
