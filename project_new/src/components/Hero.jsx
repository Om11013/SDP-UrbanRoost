import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';

const Hero = () => {
  const strings = [' Rent a place, ', ' Sell a place, ', ' Offer services '];
  const location = useLocation();
  const { role } = location.state || {}; 
  console.log(location.state); 

  return (
    <div className='text-white bg-slate-800'>
      <Navbar role={role} /> 
      <div className='max-w-[800px] mt-[-96px] w-full mx-auto h-screen text-center flex flex-col justify-center'>
        <p className='text-amber-400 font-bold p-2'>Hey, Welcome to UrbanRoost</p>
        <div className='flex justify-center items-center my-4'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Want to {strings}</p>
        </div>
        <button className='bg-amber-400 rounded-xl w-[200px] py-1 my-5 mx-auto text-black'><Link to={{ pathname: "/signup", state: { role: role } }}>Get Started</Link></button> {/* Pass role as a parameter in the URL */}
      </div>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Hero;