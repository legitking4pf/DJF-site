'use client'
import {doctrines} from '@/data/doctrines'

interface DoctrineProps {
  title: string;
  subtitle: string;
  content: string[];
}

export default function ExecutiveDoctrine({
  title,
  subtitle,
  content,
}: DoctrineProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-neutral-400 text-sm mt-1">{subtitle}</p>
      </div>

      <div className="space-y-4 text-neutral-200 leading-relaxed content-justify">
        {content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}