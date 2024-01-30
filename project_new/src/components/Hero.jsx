import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
// import { Typed } from 'react-typed';

const Hero = () => {
  const strings = [' Rent a place ', ' Sell a place ', ' Offer services '];

  return (
    
    <div className='text-white bg-black'>
      { Navbar1()}
      <div className='max-w-[800px] mt-[-96px] w-full mx-auto h-screen text-center flex flex-col justify-center'>
        <p className='text-amber-400 font-bold p-2'>Hey, Welcome to UrbanRoost</p>
        <div className='flex justify-center items-center my-4'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Want to {strings}</p>
          {/* <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
          strings={['Rent a place', 'Sell a place', 'Offer services']}
          typeSpeed={40}
          backSpeed={50}
          startDelay={1000}
          backDelay={1000}
          loop
          /> */}
      </div>
        <button className='bg-amber-400 rounded-xl w-[200px] py-1 my-5 mx-auto text-black'><Link to="/signup">Get Started</Link></button>
      </div>
    </div>
  );
}

export default Hero;

export const Navbar1 = () => { 
  return (<Navbar/>);
}