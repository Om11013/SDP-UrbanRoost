import React from 'react';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl font-extrabold text-gray-900">About UrbanRoost</h2>
          </div>
          <div className="border-t border-gray-200">
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <p className="mt-1 text-base text-gray-700 sm:col-span-3">
                At UrbanRoost, we aim to simplify the process of finding a suitable dwelling for individuals while
                streamlining the property listing process for owners. Our platform is designed to eliminate the stress
                associated with traditional methods like brokers and brokerage fees.
              </p>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <p className="mt-1 text-base text-gray-700 sm:col-span-3">
                <span className="font-bold">Key Features:</span>
              </p>
              <ul className="mt-1 text-base text-gray-700 sm:col-span-3 list-disc list-inside">
                <li>Individuals can easily find a suitable dwelling based on filters such as rent, ratings, facilities, and location.</li>
                <li>Owners can effortlessly list their properties, including flats, rooms, tenements, hostels, etc.</li>
                <li>No need to undergo the stress of finding brokers and paying brokerage fees for tenants and owners.</li>
                <li>Domestic allies like milkmen, cleaners, cooks, tiffin providers, laundry, etc., can enlist their services.</li>
                <li>Owners have access to track records of tenant activities, including rent payments.</li>
              </ul>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <p className="mt-1 text-base text-gray-700 sm:col-span-3">
                <span className="font-bold">Join UrbanRoost Today!</span>
              </p>
              <p className="mt-1 text-base text-gray-700 sm:col-span-3">
                Experience the ease of finding your ideal dwelling or listing your property hassle-free. UrbanRoost is not just a
                platform; it's a community that connects residents and property owners seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUs;
