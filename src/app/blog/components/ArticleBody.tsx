import React from "react";
import type { ContentBlock } from "../data";
import { renderInline } from "./RichText";

const TipIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v.2h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ArticleBody({ content }: { content: ContentBlock[] }) {
  return (
    <div className="space-y-5 sm:space-y-6">
      {content.map((block, idx) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={idx}
                className="text-base sm:text-lg leading-8 sm:leading-9 text-blue-dk/85 font-medium"
              >
                {renderInline(block.text, `p${idx}`)}
              </p>
            );

          case "h2":
            return (
              <h2
                key={idx}
                className="text-2xl sm:text-3xl font-black text-blue-dk pt-4 sm:pt-6 leading-tight"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={idx}
                className="text-xl sm:text-2xl font-bold text-blue-dk pt-2 leading-snug"
              >
                {block.text}
              </h3>
            );

          case "ul":
            return (
              <ul key={idx} className="space-y-3">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-orange mt-1 shrink-0" />
                    <span className="text-base sm:text-lg leading-8 text-blue-dk/85 font-medium">
                      {renderInline(item, `ul${idx}-${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={idx} className="space-y-3">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange text-white text-sm font-black shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-base sm:text-lg leading-8 text-blue-dk/85 font-medium">
                      {renderInline(item, `ol${idx}-${i}`)}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "tip":
            return (
              <aside
                key={idx}
                className="rounded-2xl bg-blue-dk text-white p-5 sm:p-6 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <TipIcon className="w-6 h-6 text-orange" />
                  <span className="text-orange font-black text-lg">{block.title}</span>
                </div>
                <p className="text-base sm:text-lg leading-8 text-white/90 font-medium">
                  {renderInline(block.text, `tip${idx}`)}
                </p>
              </aside>
            );

          case "table":
            return (
              <div key={idx} className="overflow-x-auto rounded-2xl border border-blue-dk/10 shadow-sm">
                <table className="w-full text-right border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-blue-dk text-white">
                      {block.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3 text-sm sm:text-base font-bold whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 0 ? "bg-white-card" : "bg-cream"}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="px-4 py-3 text-sm sm:text-base text-blue-dk/85 font-medium align-top border-t border-blue-dk/5"
                          >
                            {renderInline(cell, `td${idx}-${ri}-${ci}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
