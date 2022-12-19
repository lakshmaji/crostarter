import { Category } from '../../models/category';
import React, { FC } from 'react';
import Companies from '../../features/home/companies/Companies';
import FeaturedCategories from '../../features/home/categories/FeaturedCategories';
import FeaturedProjects from '../../features/home/featured-projects/FeaturedProjects';
import HowItWorks from '../../features/home/how-it-works/HowItWorks';
import RecommendedProjects from '../../features/home/recommened-projects/RecommendedProjects';
import OverallStats from '../../features/home/stats/OverallStats';
import { IProject } from '../../models/project';
import Hero from '../../features/home/hero/Hero';
import AppHead from '../../components/AppHead';

interface Props {
  categories: Category[];
  trending_projects: IProject[];
  recommended_projects: IProject[];
}

const Home: FC<Props> = ({ categories, trending_projects, recommended_projects }) => {
  return (
    <>
      <AppHead title='Home'>
        <meta
          name='description'
          content='Crostarter is a blackhole crowd funding application, where you can raise funds, invest in projects. This is a test application.'
        />
      </AppHead>
      <Hero />
      <OverallStats />
      <FeaturedProjects trending_projects={trending_projects} />
      <HowItWorks />
      <FeaturedCategories categories={categories} />

      <RecommendedProjects recommended_projects={recommended_projects} />
      <Companies />
    </>
  );
};

export default Home;
