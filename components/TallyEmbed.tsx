"use client";

import { useEffect } from "react";
import { tallyFormId, tallyUrl } from "@/content/tally";

interface TallyEmbedProps {
  className?: string;
}

export default function TallyEmbed({ className }: TallyEmbedProps) {
  useEffect(() => {
    // Load Tally embed script
    const existingScript = document.getElementById("tally-js");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "tally-js";
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      script.onload = () => {
        // @ts-expect-error Tally is loaded from external script
        if (typeof Tally !== "undefined") {
          // @ts-expect-error Tally is loaded from external script
          Tally.loadEmbeds();
        }
      };
      document.head.appendChild(script);
    } else {
      // Script already loaded, just trigger embed loading
      // @ts-expect-error Tally is loaded from external script
      if (typeof Tally !== "undefined") {
        // @ts-expect-error Tally is loaded from external script
        Tally.loadEmbeds();
      }
    }
  }, []);

  // If placeholder form ID, show a styled fallback
  if (tallyFormId === "YOUR_TALLY_FORM_ID") {
    return (
      <div
        className={`rounded-lg border border-border bg-card p-8 text-center space-y-4 ${className ?? ""}`}
      >
        <p className="label-xs">Buchungsformular</p>
        <p className="font-serif text-xl text-foreground">
          Formular wird hier eingebettet
        </p>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Tragen Sie Ihre Tally Form ID in{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">
            /content/tally.ts
          </code>{" "}
          ein, um das Buchungsformular zu aktivieren.
        </p>
        <a
          href={tallyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Formular öffnen
        </a>
      </div>
    );
  }

  return (
    <div className={`rounded-lg border border-border overflow-hidden ${className ?? ""}`}>
      <iframe
        data-tally-src={`https://tally.so/embed/${tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="500"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Buchungsformular"
        className="w-full"
      />
      <noscript>
        <a
          href={tallyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Formular öffnen
        </a>
      </noscript>
    </div>
  );
}
