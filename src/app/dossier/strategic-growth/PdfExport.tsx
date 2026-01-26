"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PdfExport() {
  const handleExportPDF = async () => {
    const element = document.getElementById("dossier");
    
    if (!element) return;
    
    // Capture at high resolution
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#0A0A0A",
      useCORS: true,
    });
    
    const imgData = canvas.toDataURL("image/png");
    
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight,
      undefined,
      "FAST"
    );
    
    pdf.save("DJF-CAODossier.pdf");
  };
  
  return (
    <section className="space-y-12">
      {/* EXPORT BUTTON */}
      <div className="flex justify-end">
        <button
          onClick={handleExportPDF}
          className="border border-[#C6A87C] text-[#C6A87C] px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#C6A87C] hover:text-black transition"
        >
          Export Board Briefing (PDF)
        </button>
      </div>

      {/* CONTENT TO EXPORT */}
      <div id="dossier-export" className="space-y-24">
        {/* Put your Strategic Growth content here */}
      </div>
    </section>
  );
}