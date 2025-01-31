"use client";
import { JSX, useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import { Document, Page } from "react-pdf";

const RenderAndDisplayPDF = ({ Template }: { Template: JSX.Element }) => {
  const [pdfData, setPdfData] = useState<Uint8Array | ArrayBuffer>();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isClient, setIsClient] = useState<boolean>(false); // Track if on the client side
  const templateRef = useRef<HTMLDivElement>(null);

  // Ensure code runs only on the client
  useEffect(() => {
    setIsClient(true); // We are on the client now
  }, []);

  const isValidArrayBuffer = (buffer: ArrayBuffer | null) => {
    try {
      new Uint8Array(buffer || []);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  const generatePDF = () => {
    
  const doc = new jsPDF({
    orientation: "portrait",  // Can be 'landscape' if needed
    unit: "mm",  // Unit of measurement (millimeters)
    format: "a4",  // A4 page size
  });

  try {
    const container = templateRef.current?.firstElementChild as HTMLElement;
    if(!container) return;
    // Get the height and width of the template element
    const elementWidth = container.offsetWidth;
    const elementHeight = container.offsetHeight;

    // Adjust scaling factor based on the A4 page size (210mm x 297mm)
    const pageWidth = 210;  // A4 width in mm
    const pageHeight = 297; // A4 height in mm

    // Calculate the scale factors for width and height
    const scaleX = pageWidth / elementWidth;
    const scaleY = pageHeight / elementHeight;

    // Use the minimum of both to maintain aspect ratio
    const scaleFactor = Math.min(scaleX, scaleY);

    // Apply scaling with the calculated scaleFactor
    doc.html(container, {
      callback: function (doc) {
        doc.save("generated_resume.pdf");  // Download the generated PDF
      },
      x: 10,  // X position on the page
      y: 10,  // Y position on the page
      width: elementWidth * scaleFactor,  // Adjust width based on scale
      windowWidth: 800,  // Window width (for content rendering)
    });
  } catch (error) {
    console.error("Error capturing image:", error);
  }
  };
  

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  // Prevent rendering while the component is not mounted on the client
  if (!isClient) return null;

  return (
    <div>
      {/* Template to generate the PDF */}
      {isClient && <div ref={templateRef}>
        {Template}
      </div>}

      {/* Generate PDF button only visible after the component mounts */}
      {isClient && (
        <button onClick={generatePDF}>Generate PDF</button>
      )}

      {/* Render the PDF on the UI using pdf.js */}
      {isClient && pdfData && (
        <div style={{ width: "100%", height: "500px", overflow: "auto" }}>
          <Document
            file={{ data: pdfData }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>

          <div>
            {/* Navigation for the PDF */}
            <button
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              disabled={pageNumber === 1}
            >
              Previous
            </button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() =>
                setPageNumber((prev) => Math.min(prev + 1, numPages))
              }
              disabled={pageNumber === numPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderAndDisplayPDF;
