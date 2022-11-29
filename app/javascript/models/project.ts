import { Category } from './category';

export interface IProject {
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
  category?: Category;
}
