'use client'

interface DoctrineSection {
  heading: string[];
  points: string[];
}

interface DoctrineProps {
  title: string;
  subtitle: string;
  content?: string[];
  sections?: DoctrineSection[];
}

export default function ExecutiveDoctrine({
  title,
  subtitle,
  content,
  sections,
}: DoctrineProps) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-neutral-400 text-sm mt-1">{subtitle}</p>
      </div>

      {/* Paragraph Mode (Public Edition) */}
      {content && (
        <div className="space-y-4 text-neutral-200 leading-relaxed">
          {content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {/* Structured Mode (Investor & Board Editions) */}
      {sections && (
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                {section.heading}
              </h3>
              <ul className="space-y-2 text-neutral-200 text-sm">
                {section.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-neutral-500">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}