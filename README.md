# Signature Writer

A simple web-based **Signature Writer** application that allows users to draw their signature on a canvas, customize pen style and color, and download the signature as a PNG image or PDF document.

## Features
- **Draw Signature:** Users can freely draw signatures on a canvas.
- **Pen Customization:**
  - Choose from different pen styles: Round, Square, and Butt.
  - Change the pen color using a color picker.
- **Download Options:**
  - Download the signature as a PNG image.
  - Download the signature as a PDF.

## Demo
You can try out the **Signature Writer** in any browser by opening the `index.html` file.

## How to Use
1. Open the `index.html` file in your browser.
2. Draw your signature in the signature area.
3. Select the desired pen style and color from the controls.
4. Click the "Clear" button to erase the signature.
5. Download the signature:
   - As PNG: Click the "Download as PNG" button.
   - As PDF: Click the "Download as PDF" button.

## Project Structure

- index.html  (Main HTML structure)
- sign.css    (Styling for the app)
- sign.js     (JavaScript for signature drawing and download functionality)

## Dependencies
- [jsPDF](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js) for exporting the signature to a PDF format.

## Usage Example
```html
<div class="container">
  <canvas id="signature-pad" width="500" height="300"></canvas>
  <select id="pen-style">
    <option value="round">Round</option>
    <option value="square">Square</option>
    <option value="butt">Butt</option>
  </select>
  <input type="color" id="pen-color" value="#000000">
  <button id="clear-btn">Clear</button>
  <button id="download-png-btn">Download as PNG</button>
  <button id="download-pdf-btn">Download as PDF</button>
</div>
```

## How It Works
1. **Drawing**: Users can draw using mouse events. The drawing is handled via the `<canvas>` element using the `2D` context.
2. **Customization**: Users can choose from different pen styles and change the pen color dynamically.
3. **Download as PNG**: Converts the canvas drawing into a PNG and triggers a download.
4. **Download as PDF**: Converts the canvas drawing into a PNG image and embeds it into a PDF using the `jsPDF` library.

## Screenshots
![Signature Writer Screenshot](screenshot.png)

