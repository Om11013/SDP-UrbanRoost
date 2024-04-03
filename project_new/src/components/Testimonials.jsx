import React from 'react'

const Testimonials = () => {
    return (
      <section className="bg-gray-200 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">What Our Customers Say</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <p className="text-gray-800 mb-4">"I recently purchased a property through this website, and I couldn't be happier with the experience. The process was smooth from start to finish, and the team was incredibly helpful every step of the way. Would definitely recommend."</p>
                <p className="font-semibold text-black">- Luca Brasi</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <p className="text-gray-800 mb-4">"I've been using this website to search for investment properties, and I'm consistently impressed by the quality of listings available. The website is user-friendly, and the search filters make it easy to narrow down options based on my criteria."</p>
                <p className="font-semibold text-black">- Michael Corleone</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <p className="text-gray-800 mb-4">"I found my dream home using this website, and I couldn't be happier with the outcome. The search functionality was intuitive. The whole process, from browsing listings to closing the deal, was seamless. Highly recommended!"</p>
                <p className="font-semibold text-black">- Johnny Fontanne</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Testimonials