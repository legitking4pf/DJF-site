import { generatePdf } from "@/lib/pdf";

export default function PdfExportButton() {
  return (
    <button
      onClick={generatePdf}
      className="border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900 transition"
    >
      Download PDF Briefing
    </button>
  );
}
