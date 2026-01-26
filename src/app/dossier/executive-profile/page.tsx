import React, { useState } from "react";
import Image from "next/image";


const HERO = {
  name: "David Jackson Fernandez",
  title: "Chief Administrative & Technology Officer",
  locations: "Honduras · Spain · Guatemala",
  image: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM",
};

function Redacted({ text }: { text: string }) {
  return (
    <p> {text .replace(/\b(BOARD|BOARD RESOLUTION|REGULATOR|AUDIT REPORT)\b/gi, "[REDACTED]") .replace(/\b(\d{2,}[%]|\d{4,})\b/g, "[REDACTED]") } </p>
    );
}

function PublicSummary() {
  return (<section className="space-y-8"> <h2 className="text-3xl font-serif">Public Executive Summary (Redacted)</h2>

<p className="leading-relaxed">
    David Jackson Fernandez is a senior executive operating at the intersection of institutional governance,
    enterprise technology transformation and high-end commercial design. This public dossier conveys his
    leadership philosophy, strategic priorities under "Vision 2030," and a high-level account of signature
    initiatives, with confidential implementation detail redacted.
  </p>

  <article>
    <h3 className="text-xl font-semibold">Personal & Leadership Profile</h3>
    <Redacted text={`David's formation blends operational leadership in regulated finance with commercial design
    entrepreneurship. He leads with a systems-first approach: establishing clear decision rules, removing single
    points of accountability that can lead to hero-dependent delivery, and making investment trade-offs auditable.
    Publicly, he emphasizes continuity of service, customer protection, and regulatory defensibility.`} />
  </article>

  <article>
    <h3 className="text-xl font-semibold">Vision 2030 — Public Doctrine</h3>
    <Redacted text={`Vision 2030 serves as a long-range doctrine aligning capital allocation, platform resilience,
    and talent institutionalization. It is built around five public pillars: resilient core systems, regulatory
    alignment, customer continuity, commercialized design-led offerings, and capability institutionalization.`} />
    <p className="text-sm text-ash">(Sensitive scorecards and gating criteria are available in the private annex.)</p>
  </article>

  <article>
    <h3 className="text-xl font-semibold">Signature Public Initiatives</h3>
    <Redacted text={`Platform Resilience: A staged program to modernize core banking infrastructure with parallel
    verification streams (technical, accounting, compliance). Institutional Governance Reset: A layered oversight model
    that connects the board to delivery, formalizing gate-based approvals and compliance signoffs. Koncepto: productizing
    premium design through repeatable commercial modules.`} />
  </article>

  <article>
    <h3 className="text-xl font-semibold">Why Stakeholders Should Trust This Record</h3>
    <Redacted text={`The public dossier emphasizes process over rhetoric: transformation is described in terms of decision rules,
    auditable gates, and independent verification. When private documents are requested (e.g., by regulators or
    potential strategic partners), they are delivered in a controlled annex with signatures and attestations.`} />
  </article>

  <p className="text-sm text-ash">
    Note: This public record intentionally omits operational artifacts, detailed KPIs and specific contract terms.
    Those items are held in the private annex and delivered under appropriate confidentiality controls.
  </p>
</section>
    
  );
}

function PrivateAnnex() {
  const sections = [{ title: "Full Biography & Personal Formation", body: `David's formative career included senior leadership in enterprise operations, cross-border program management, and founding a Europe-based design practice. He is fluent in Spanish and English, has led multi-jurisdictional change programs, and places emphasis on institutionalizing capability rather than relying on individuals.

Detailed CV and board appointment dates: [CONFIDENTIAL_ATTACHMENT: CV_AND_APPOINTMENTS], }, { title: "Program Narrative — Core Modernization (CTO)", body: Program intent: Replace legacy ledger and transactional platform with a modular, service-oriented stack.

Migration strategy: phased parallel replication of ledger state, automated accounts reconciliation at each stage, blue/green deployment for customer channels, and a rollback-ready migration with a live shadow of legacy state for 90 days.

Controls: independent accounting reconciliation signoff, regulator notification schedule, and a forensic-grade change log for every data migration step.

Artifacts to attach: program charter, migration runbooks, reconciliation spreadsheets, regulator briefings, incident response playbooks, independent verification reports. (See attachments.), }, { title: "Program Narrative — Governance Reset (CAO)", body: Design: layered governance structure — Board Strategy Committee -> Group Transformation Council -> Program Steering Committees -> Delivery Cells.

Key institutional artifacts: risk appetite statement, program gating templates, scoring model for capex prioritization, and a compliance matrix that maps each program deliverable to regulatory controls and audit points.

Attachments: governance framework PDF, approved gating templates, minutes of first three steering meetings (redacted versions for public, full versions for private annex)., }, { title: "Operational Playbooks & Templates", body: This section contains practical, copy-ready templates and checklists:

Gate Approval Template (covering objectives, scope, risk assessment, accounting impact, compliance checklist)

Migration Reconciliation Checklist (automated ETL verification, checksum procedures, exception handling rules)

Incident Postmortem Template (timeline, impact analysis, corrective actions, owner, prevention measures)


Each template is intended to be versioned and signed by domain leads prior to gate approval., }, { title: "Compliance & Regulatory Interaction", body: Description: maintain regular regulator engagement through a documented "Regulatory Liaison Docket" that includes probative summaries at each Gate and a formal notification schedule for major cutovers. Attachments include regulator communications and compliance signoff forms.

Confidential artifacts: regulator letters, compliance signoff forms, internal legal memos., }, { title: "Evidence Index & Attachments", body: Index of confidential items that should be appended when producing the private PDF annex for third-party review:

1. Program charter and steering minutes (CONFIDENTIAL_ATTACHMENT: PROGRAM_CHARTER)


2. Migration runbooks and reconciliation exports (CONFIDENTIAL_ATTACHMENT: RUNBOOKS)


3. Regulator communications (CONFIDENTIAL_ATTACHMENT: REGULATOR_LETTERS)


4. Independent verification and audit reports (CONFIDENTIAL_ATTACHMENT: AUDIT_REPORTS)



Each attachment must be verified and stamped by the group secretary before inclusion in the private annex.`, }, ];
  
  return (<section className="space-y-8"> <h2 className="text-3xl font-serif">Private Annex (CONFIDENTIAL)</h2> <p className="text-sm text-ash">Full program narratives, templates, and attachments intended for controlled distribution only.</p>

{sections.map((s, i) => (
    <article key={i} className="space-y-3">
      <h3 className="text-xl font-semibold">{s.title}</h3>
      <pre className="whitespace-pre-wrap bg-[#F7F7F7] p-4 rounded">{s.body}</pre>
    </article>
  ))}

  <div className="mt-6 p-4 border-l-4 border-gold bg-white rounded">
    <strong>Distribution rules</strong>
    <ol className="list-decimal list-inside">
      <li>Private annex must be delivered only under NDA or to authorized regulators/board members.</li>
      <li>Every attached file must be verified and timestamped by the Group Secretary.</li>
      <li>Use a secure file transfer mechanism (SFTP, enterprise DMS). Avoid email for attachments unless encrypted.</li>
    </ol>
  </div>
</section>
    
  );
}

export default function ExecutiveDossierTwoStage() {
  const [mode, setMode] = useState < "public" | "private" > ("public");
  
  return (<main className="min-h-screen bg-[#FBFBF9] text-obsidian p-8"> <div className="max-w-5xl mx-auto"> <div className="flex items-center justify-between mb-8"> <div> <div className="text-xs uppercase tracking-widest text-ash font-black">Institutional Dossier</div> <h1 className="text-4xl font-serif">{HERO.name}</h1> <div className="text-sm mt-1">{HERO.title} — {HERO.locations}</div> </div>

<div className="flex gap-2">
        <button
          onClick={() => setMode("public")}
          className={`px-4 py-2 rounded ${mode === "public" ? "bg-obsidian text-bone" : "border"}`}
        >
          Public
        </button>
        <button
          onClick={() => setMode("private")}
          className={`px-4 py-2 rounded ${mode === "private" ? "bg-obsidian text-bone" : "border"}`}
        >
          Private
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
      <aside className="space-y-6">
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-obsidian/10">
          <Image src={HERO.image} alt={HERO.name} fill className="object-cover grayscale" priority />
        </div>

        <div className="p-4 bg-white border rounded">
          <div className="text-xs uppercase tracking-widest text-ash font-black">Roles</div>
          <ul className="mt-2 text-sm">
            <li>CAO — Grupo Financiero Atlántida</li>
            <li>CTO — Banco Atlántida Honduras</li>
            <li>Founder — Koncepto Décor</li>
          </ul>
        </div>
      </aside>

      <article className="prose">
        {mode === "public" ? <PublicSummary /> : <PrivateAnnex />}
      </article>
    </div>

    <footer className="mt-12 text-sm text-ash border-t pt-6">Canonical dossier. Use the private annex only under appropriate confidentiality controls.</footer>
  </div>
</main>
    
  );
}