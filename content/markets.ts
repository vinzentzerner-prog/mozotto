export interface Market {
  id: string;
  nameKey: string;
  cityKey: string;
  dateKey: string;
  mapUrl?: string;
}

export const markets: Market[] = [
  {
    id: "zurich",
    nameKey: "market_zurich_name",
    cityKey: "market_zurich_city",
    dateKey: "market_zurich_date",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "bern",
    nameKey: "market_bern_name",
    cityKey: "market_bern_city",
    dateKey: "market_bern_date",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "basel",
    nameKey: "market_basel_name",
    cityKey: "market_basel_city",
    dateKey: "market_basel_date",
    mapUrl: "https://maps.google.com",
  },
];
