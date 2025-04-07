export type ExcelRow = Record<string, string | number | boolean | null>;
export type ExcelSheetData = { [sheetName: string]: ExcelRow[] };
export type ExcelOptions = {
    type: 'binary' | 'buffer';
    bookType: 'xlsx';
    compression: boolean;
};
