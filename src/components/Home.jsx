import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const loadedCoffees = useLoaderData();

    const [coffees, setCoffees] =useState(loadedCoffees);
  
    return (
      <div className='m-20'>
        <h1 className='text-3xl text-center text-purple-400 my-10'>Hot Cold Coffee: {coffees.length}</h1>
        <div className='grid md:grid-cols-2 gap-4'>
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
          }
        </div>
      </div>
    )
}

export default Home;