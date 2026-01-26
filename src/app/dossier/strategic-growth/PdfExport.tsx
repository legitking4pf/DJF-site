"use client";

import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PdfExport() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    // 1. Target the correct ID (Must match the ID on your <main> or wrapper)
    const element = document.getElementById("dossier");
    
    if (!element) {
      console.error("Export Error: Element with ID 'dossier' not found.");
      return;
    }

    try {
      setIsExporting(true);

      // 2. High-fidelity capture settings
      const canvas = await html2canvas(element, {
        scale: 2, // Better resolution for executive viewing
        backgroundColor: "#0A0A0A", // Matches your dark aesthetic
        useCORS: true, // Crucial for loading map tiles/external assets
        logging: false,
        allowTaint: true,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      
      // 3. Initialize PDF (A4 Format)
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;

      // 4. Center horizontally
      const xOffset = (pdfWidth - finalWidth) / 2;

      pdf.addImage(
        imgData,
        "PNG",
        xOffset,
        0,
        finalWidth,
        finalHeight,
        undefined,
        "FAST"
      );

      pdf.save(`DJF-Board-Briefing-${new Date().getFullYear()}.pdf`);
    } catch (error) {
      console.error("PDF Generation failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex justify-end pt-4">
      <button
        onClick={handleExportPDF}
        disabled={isExporting}
        className={`border border-[#C6A87C] px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
          isExporting 
            ? "opacity-50 cursor-not-allowed" 
            : "text-[#C6A87C] hover:bg-[#C6A87C] hover:text-black"
        }`}
      >
        {isExporting ? "Processing Briefing..." : "Export Board Briefing (PDF)"}
      </button>
    </div>
  );
}
