export interface MenuItem {
  id: string;
  nameKey: string;
  descKey: string;
  chefRecommendation?: boolean;
}

export interface ChampagneTier {
  tier: "classics" | "prestige" | "sommeliers";
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
    tier: "classics",
    items: [
      { id: "c1", nameKey: "champ_c1_name", descKey: "champ_c1_desc" },
      { id: "c2", nameKey: "champ_c2_name", descKey: "champ_c2_desc" },
      { id: "c3", nameKey: "champ_c3_name", descKey: "champ_c3_desc" },
    ],
  },
  {
    tier: "prestige",
    items: [
      { id: "p1", nameKey: "champ_p1_name", descKey: "champ_p1_desc" },
      { id: "p2", nameKey: "champ_p2_name", descKey: "champ_p2_desc" },
    ],
  },
  {
    tier: "sommeliers",
    items: [
      { id: "s1", nameKey: "champ_s1_name", descKey: "champ_s1_desc" },
      { id: "s2", nameKey: "champ_s2_name", descKey: "champ_s2_desc" },
    ],
  },
];
