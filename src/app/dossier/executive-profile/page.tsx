"use client";

import React, { useState } from "react";
import Image from "next/image";

const HERO = {
  name: "David Jackson Fernandez",
  title: "Chief Administrative & Technology Officer",
  locations: "Honduras · Spain · Guatemala",
  image:
    "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM",
};

function Redacted({ text }: { text: string }) {
  return (
    <p>
      {text
        .replace(
          /\b(BOARD|BOARD RESOLUTION|REGULATOR|AUDIT REPORT)\b/gi,
          "[REDACTED]"
        )
        .replace(/\b(\d{2,}%|\d{4,})\b/g, "[REDACTED]")}
    </p>
  );
}

function PublicSummary() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-serif">
        Public Executive Summary (Redacted)
      </h2>

      <p className="leading-relaxed">
        David Jackson Fernandez is a senior executive operating at the intersection
        of institutional governance, enterprise technology transformation, and
        high-end commercial design. This public dossier conveys leadership
        philosophy, strategic intent under Vision 2030, and signature initiatives,
        with confidential implementation detail intentionally withheld.
      </p>

      <article>
        <h3 className="text-xl font-semibold">
          Personal & Leadership Profile
        </h3>
        <Redacted
          text={`David’s formation blends senior operational leadership in regulated finance with commercial design entrepreneurship. His leadership model is systems-first: decisions are codified, accountability is distributed, and delivery is insulated from individual dependency. Public emphasis is placed on continuity of service, institutional defensibility, and customer protection.`}
        />
      </article>

      <article>
        <h3 className="text-xl font-semibold">
          Vision 2030 — Public Doctrine
        </h3>
        <Redacted
          text={`Vision 2030 is a long-range institutional doctrine aligning capital allocation, platform resilience, regulatory alignment, customer continuity, design-led commercialization, and internal capability institutionalization.`}
        />
        <p className="text-sm text-ash">
          Sensitive scorecards and execution gates are restricted to the private
          annex.
        </p>
      </article>

      <article>
        <h3 className="text-xl font-semibold">
          Why Stakeholders Should Trust This Record
        </h3>
        <Redacted
          text={`This dossier prioritizes process over narrative. Transformation is framed through auditable gates, verification layers, and independent oversight. Confidential documentation is released only via controlled annexes with formal attestations.`}
        />
      </article>
    </section>
  );
}

function PrivateAnnex() {
  const sections = [
    {
      title: "Full Biography & Personal Formation",
      body: `David’s career spans senior enterprise operations, cross-border program leadership, and the founding of a Europe-based design practice. Fluent in English and Spanish, he has led multi-jurisdictional transformations with a consistent focus on institutional durability over individual dependency.

CONFIDENTIAL_ATTACHMENT: CV_AND_APPOINTMENTS`,
    },
    {
      title: "Program Narrative — Core Modernization (CTO)",
      body: `Intent: replace legacy ledger and transactional platforms with a modular, service-oriented architecture.

Migration strategy includes phased parallel replication, automated reconciliation at each gate, blue/green cutovers, and a rollback-ready shadow environment.

Artifacts: program charter, migration runbooks, reconciliation logs, regulator briefings, incident playbooks, independent verification reports.`,
    },
    {
      title: "Program Narrative — Governance Reset (CAO)",
      body: `Governance model establishes layered oversight:
Board Strategy Committee → Transformation Council → Steering Committees → Delivery Cells.

Artifacts include risk appetite statements, gating templates, capex scoring models, and regulatory compliance matrices.`,
    },
    {
      title: "Evidence Index & Attachments",
      body: `1. Program charters and steering minutes
2. Migration runbooks and reconciliation exports
3. Regulator communications
4. Independent audit and verification reports

All attachments are stamped and logged prior to distribution.`,
    },
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-serif">Private Annex (CONFIDENTIAL)</h2>

      {sections.map((s, i) => (
        <article key={i} className="space-y-3">
          <h3 className="text-xl font-semibold">{s.title}</h3>
          <pre className="whitespace-pre-wrap bg-[#F7F7F7] p-4 rounded">
            {s.body}
          </pre>
        </article>
      ))}
    </section>
  );
}

export default function ExecutiveDossierTwoStage() {
  const [mode, setMode] = useState<"public" | "private">("public");

  return (
    <main className="min-h-screen bg-[#FBFBF9] p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-serif">{HERO.name}</h1>
            <p className="text-sm">
              {HERO.title} — {HERO.locations}
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => setMode("public")}>Public</button>
            <button onClick={() => setMode("private")}>Private</button>
          </div>
        </header>

        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          <aside>
            <Image
              src={HERO.image}
              alt={HERO.name}
              width={260}
              height={325}
              className="grayscale"
            />
          </aside>

          <article>{mode === "public" ? <PublicSummary /> : <PrivateAnnex />}</article>
        </div>
      </div>
    </main>
  );
}