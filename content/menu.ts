export interface MenuItem {
  id: string;
  nameKey: string;
  descKey: string;
  chefRecommendation?: boolean;
}

export interface ChampagneTier {
  tier: "house" | "reserve" | "prestige";
  items: { id: string; nameKey: string; descKey: string }[];
}

export interface Extra {
  id: string;
  nameKey: string;
  descKey: string;
  optional: boolean;
}

export const risotti: MenuItem[] = [
  {
    id: "zafferano",
    nameKey: "risotto_zafferano_name",
    descKey: "risotto_zafferano_desc",
    chefRecommendation: true,
  },
  {
    id: "tartufo",
    nameKey: "risotto_tartufo_name",
    descKey: "risotto_tartufo_desc",
  },
];

export const extras: Extra[] = [
  {
    id: "bbq",
    nameKey: "extra_bbq_name",
    descKey: "extra_bbq_desc",
    optional: true,
  },
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
