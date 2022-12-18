import { Category } from '../../models/category';
import React, { FC } from 'react';
import CompaniesList from './CompaniesList';
import FeaturedCategories from './FeaturedCategories';
import FeaturedProjects from './FeaturedProjects';
import HowItWorks from './HowItWorks';
import RecommendedProjects from './RecommendedProjects';
import OverallStats from './OverallStats';
import { IProject } from '../../models/project';
import Hero from './Hero';

interface Props {
  categories: Category[];
  trending_projects: IProject[];
  recommended_projects: IProject[];
}

const Home: FC<Props> = ({ categories, trending_projects, recommended_projects }) => {
  return (
    <>
      <Hero />
      <OverallStats />
      <FeaturedProjects trending_projects={trending_projects} />
      <HowItWorks />
      <FeaturedCategories categories={categories} />

      <RecommendedProjects recommended_projects={recommended_projects} />
      <CompaniesList />
    </>
  );
};

export default Home;
