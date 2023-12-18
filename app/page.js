// pages/index.js or any other page
import React,{lazy} from 'react';
import Hero from '@/components/Hero';
import MainGrid from '@/components/MainGrid';
import RentalNumbers from '@/components/RentalNumber';
import Info from '@/components/Info';

const LazyHero=lazy(() => import('../components/Hero'));
const LazyRentalNumbers=lazy(() => import('../components/RentalNumber'));
const LazyMainGrid=lazy(() => import('../components/MainGrid'));
const LazyInfo=lazy(() => import('../components/Info'));

const Home = () => {
  return (
    <div>
      <LazyHero/>
      <LazyRentalNumbers />
      <LazyMainGrid/>
      <LazyInfo/>
    </div>
  );
};

export default Home;
