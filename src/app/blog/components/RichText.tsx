import React from "react";
import Link from "next/link";

/**
 * Renders a minimal markdown subset used in article text:
 *   **bold**            -> <strong>
 *   [label](/path)      -> internal <Link>, [label](https://..) -> external <a>
 * Everything else is plain text. Safe: we never use dangerouslySetInnerHTML here.
 */
export function renderInline(text: string, keyPrefix = ""): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Combined matcher for links and bold, processed left to right
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      // Link
      const label = match[1];
      const href = match[2];
      const isExternal = /^https?:\/\//.test(href);
      if (isExternal) {
        nodes.push(
          <a
            key={`${keyPrefix}-a-${i}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange font-semibold underline decoration-orange/30 underline-offset-2 hover:decoration-orange transition-colors"
          >
            {label}
          </a>
        );
      } else {
        nodes.push(
          <Link
            key={`${keyPrefix}-l-${i}`}
            href={href}
            className="text-orange font-semibold underline decoration-orange/30 underline-offset-2 hover:decoration-orange transition-colors"
          >
            {label}
          </Link>
        );
      }
    } else if (match[3] !== undefined) {
      // Bold
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-bold text-blue-dk">
          {match[3]}
        </strong>
      );
    }

    lastIndex = pattern.lastIndex;
    i++;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function InlineText({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}
