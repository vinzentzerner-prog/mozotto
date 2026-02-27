export interface MenuItem {
  id: string;
  nameKey: string;
  descKey: string;
}

export interface ChampagneTier {
  tier: "house" | "reserve" | "prestige";
  items: { id: string; nameKey: string; descKey: string }[];
}

export interface Upsell {
  id: string;
  nameKey: string;
}

export const risotti: MenuItem[] = [
  { id: "classico", nameKey: "risotto_classico_name", descKey: "risotto_classico_desc" },
  { id: "funghi", nameKey: "risotto_funghi_name", descKey: "risotto_funghi_desc" },
  { id: "tartufo", nameKey: "risotto_tartufo_name", descKey: "risotto_tartufo_desc" },
  { id: "zafferano", nameKey: "risotto_zafferano_name", descKey: "risotto_zafferano_desc" },
  { id: "verdure", nameKey: "risotto_verdure_name", descKey: "risotto_verdure_desc" },
];

export const champagneTiers: ChampagneTier[] = [
  {
    tier: "house",
    items: [
      { id: "h1", nameKey: "champ_house_1_name", descKey: "champ_house_1_desc" },
    ],
  },
  {
    tier: "reserve",
    items: [
      { id: "r1", nameKey: "champ_reserve_1_name", descKey: "champ_reserve_1_desc" },
    ],
  },
  {
    tier: "prestige",
    items: [
      { id: "p1", nameKey: "champ_prestige_1_name", descKey: "champ_prestige_1_desc" },
    ],
  },
];

export const upsells: Upsell[] = [
  { id: "truffle", nameKey: "upsell_truffle" },
  { id: "parmesan", nameKey: "upsell_parmesan" },
  { id: "lobster", nameKey: "upsell_lobster" },
];
