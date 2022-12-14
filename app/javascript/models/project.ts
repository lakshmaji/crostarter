import { ICategory } from './category';
import { IReward } from './reward';

interface ProjectStats {
  total_backers_count?: number;
}
export interface IProject extends ProjectStats {
  id: string;
  title: string;
  website: string;
  description: string;
  end_date: string;
  funding_goal: number;
  details: string;
  category_id: string;
  creator_id: string;
  created_at: string;
  updated_at: string;
  funded?: number;
  category?: ICategory;
  rewards?: IReward[];
  avatar_url?: string;
}
