import XLSX from 'xlsx';
import { writeFile, ExternalStorageDirectoryPath } from 'react-native-fs';

const data = [
  { name: 'John', city: 'Seattle' },
  { name: 'Mike', city: 'Los Angeles' },
];

const ws = XLSX.utils.json_to_sheet(data);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
const filePath = ExternalStorageDirectoryPath + '/data.xlsx';

writeFile(filePath, wbout, 'ascii').then(() => console.log('Archivo guardado')).catch(console.error);
