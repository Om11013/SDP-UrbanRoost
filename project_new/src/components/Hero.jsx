import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Hero = () => {
  const strings = [' Rent a place ', ' Sell a place ', ' Offer services '];

  return (
    <div className='text-white bg-slate-800'>
      <Navbar1 />
      <div className='max-w-[800px] mt-[-96px] w-full mx-auto h-screen text-center flex flex-col justify-center'>
        <p className='text-amber-400 font-bold p-2'>Hey, Welcome to UrbanRoost</p>
        <div className='flex justify-center items-center my-4'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Want to {strings}</p>
        </div>
        <button className='bg-amber-400 rounded-xl w-[200px] py-1 my-5 mx-auto text-black'><Link to="/signup">Get Started</Link></button>
      </div>
      <  Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

const Testimonials = () => {
  // You can replace the static content with dynamic content fetched from a backend or stored in a state
  return (
    <section className=" bg-gray-200 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">What Our Customers Say</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Testimonial cards */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-gray-800 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut lacus et dolor eleifend bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
              <p className="font-semibold">- John Doe</p>
            </div>
          </div>
          {/* More testimonial cards can be added */}
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  // You can replace the static content with a contact form or contact information
  return (
    <section className="w-sceeen bg-slate-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="text-center">
          <p className="mb-2">For inquiries, please email us at <a href="mailto:info@urbanroost.com" className="underline">info@urbanroost.com</a></p>
          {/* You can add more contact information such as phone numbers, office address, etc. */}
        </div>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className="w-sceeen bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center">&copy; {new Date().getFullYear()} UrbanRoost. All rights reserved.</p>
        {/* You can add additional links or information in the footer */}
      </div>
    </footer>
  );
}

const Navbar1 = () => { 
  return (<Navbar />);
}

export default Hero;
