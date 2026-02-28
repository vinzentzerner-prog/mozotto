export const tallyForms: Record<string, string> = {
  en: "9qdvZK",
  de: "5BdvZv",
};

/** Returns the Tally form ID for the given locale, falling back to DE. */
export function getTallyFormId(locale: string): string {
  return tallyForms[locale] ?? tallyForms.de;
}
