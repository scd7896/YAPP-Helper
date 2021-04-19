import readXlsxFile from "read-excel-file";
import * as xlsx from "xlsx";

export const xlsxRead = async (file: File) => {
  return readXlsxFile(file);
};

export const xlsxReadJson = async (file: File) => {
  const data = await file.arrayBuffer();
  const data1 = new Uint8Array(data);
  const workBook = xlsx.read(data1, { type: "array" });
  const rows = xlsx.utils.sheet_to_json(workBook.Sheets[workBook.SheetNames[0]]);
  return rows;
};
