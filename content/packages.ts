export interface Package {
  id: string;
  nameKey: string;
  tagKey: string;
  idealForKey: string;
  guestsMin: number;
  guestsMax: number;
  durationKey: string;
  inclusionsKeys: string[];
  featured?: boolean;
}

export const packages: Package[] = [
  {
    id: "apero",
    nameKey: "apero_name",
    tagKey: "apero_tag",
    idealForKey: "apero_ideal",
    guestsMin: 20,
    guestsMax: 80,
    durationKey: "apero_duration",
    inclusionsKeys: [
      "apero_inc_1",
      "apero_inc_2",
      "apero_inc_3",
      "apero_inc_4",
    ],
  },
  {
    id: "signature",
    nameKey: "signature_name",
    tagKey: "signature_tag",
    idealForKey: "signature_ideal",
    guestsMin: 30,
    guestsMax: 120,
    durationKey: "signature_duration",
    inclusionsKeys: [
      "signature_inc_1",
      "signature_inc_2",
      "signature_inc_3",
      "signature_inc_4",
      "signature_inc_5",
    ],
    featured: true,
  },
  {
    id: "champagne",
    nameKey: "champagne_name",
    tagKey: "champagne_tag",
    idealForKey: "champagne_ideal",
    guestsMin: 20,
    guestsMax: 60,
    durationKey: "champagne_duration",
    inclusionsKeys: [
      "champagne_inc_1",
      "champagne_inc_2",
      "champagne_inc_3",
      "champagne_inc_4",
      "champagne_inc_5",
    ],
  },
];
