const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let penStyle = 'round';
let penColor = '#000000';

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

const penStyleSelect = document.getElementById('pen-style');
penStyleSelect.addEventListener('change', setPenStyle);

const penColorInput = document.getElementById('pen-color');
penColorInput.addEventListener('input', setPenColor);

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = penColor;
  ctx.lineCap = penStyle;
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
  isDrawing = false;
}

function setPenStyle() {
  penStyle = penStyleSelect.value;
}

function setPenColor() {
  penColor = penColorInput.value;
}

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearCanvas);

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const downloadPngBtn = document.getElementById('download-png-btn');
downloadPngBtn.addEventListener('click', downloadAsPNG);

function downloadAsPNG() {
  const dataURL = canvas.toDataURL('image/png');
  const tempLink = document.createElement('a');
  tempLink.download = 'signature.png';
  tempLink.href = dataURL;
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
}

const downloadPdfBtn = document.getElementById('download-pdf-btn');
downloadPdfBtn.addEventListener('click', downloadAsPDF);

function downloadAsPDF() {
  const dataURL = canvas.toDataURL('image/png');
  const pdf = new jsPDF();
  const imgProps = pdf.getImageProperties(dataURL);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  pdf.addImage(dataURL, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('signature.pdf');
}