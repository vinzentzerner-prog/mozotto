"use client";

import { useEffect } from "react";
import { getTallyFormId } from "@/content/tally";

interface TallyEmbedProps {
  locale: string;
  className?: string;
}

export default function TallyEmbed({ locale, className }: TallyEmbedProps) {
  const formId = getTallyFormId(locale);

  useEffect(() => {
    const existingScript = document.getElementById("tally-js");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "tally-js";
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      script.onload = () => {
        // @ts-expect-error Tally is loaded from external script
        if (typeof Tally !== "undefined") Tally.loadEmbeds();
      };
      document.head.appendChild(script);
    } else {
      // @ts-expect-error Tally is loaded from external script
      if (typeof Tally !== "undefined") Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="500"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Booking form"
        className="w-full"
      />
      <noscript>
        <a
          href={`https://tally.so/r/${formId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          {locale === "en" ? "Open form" : "Formular öffnen"}
        </a>
      </noscript>
    </div>
  );
}
