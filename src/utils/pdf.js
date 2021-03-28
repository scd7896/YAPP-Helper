import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const getPdfByElement = async (element, fileName) => {
  const canvas = await html2canvas(element);
  const doc = new jsPDF();
  const imgData = canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 0, 0);
  const blob = doc.output("blob");
  return new File([blob], fileName);
};
