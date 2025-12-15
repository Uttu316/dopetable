export interface Character {
  id: string;
  name: string;
  location: "Konoha" | "Suna" | "Kiri" | "Iwa" | "Kumo";
  health: "Healthy" | "Injured" | "Critical";
  power: number;
}

export type SortOrder = "asc" | "desc" | null;

export const ITEMS_PER_PAGE = 10;
export const ROW_HEIGHT = 65;
