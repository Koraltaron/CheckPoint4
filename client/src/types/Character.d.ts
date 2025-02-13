export interface Characters {
  id: number;
  name: string;
  image: string;
  role: string;
  status: string;
  vital_points: number;
  mana_points: number;
  initiative_score?: number;
  description?: string;
}
