import JsPDF from "jspdf";
import html2canvas from "html2canvas";

export const getPdfByElement = async (element, fileName) => {
  const canvas = await html2canvas(element);
  const doc = new JsPDF("p", "mm", "a4");
  const imgData = canvas.toDataURL("image/jpeg");
  const imgWidth = 210;
  const pageHeight = imgWidth * 1.414;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight - pageHeight;
  const margin = 20;
  let position = 0;
  doc.addImage(imgData, "jpeg", margin, position, imgWidth - margin * 2, imgHeight - margin * 2);

  while (heightLeft > 20) {
    position = heightLeft - imgHeight;
    doc.addPage();
    doc.addImage(imgData, margin, position, imgWidth - margin * 2, imgHeight - margin * 2);
    heightLeft -= pageHeight;
  }

  doc.save(fileName);
  const blob = doc.output("blob");
  return new File([blob], fileName);
};
export const testImage = async (element) => {
  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL("image/png");
  return imgData;
};
