import readXlsxFile from 'read-excel-file';

export const xlsxRead = (file: File) => {
	return readXlsxFile(file)
}