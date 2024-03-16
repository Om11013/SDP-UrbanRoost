import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function View_services() {
    const [allies, setallies] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/utility/getAll')
        .then(response => response.json())
        .then(data => setallies(data))
        .catch(error => console.error('Error fetching allies:', error));
    }, []);
  
    return (
        <div className='bg-gray-400'>
          <Navbar/>
          <h2 className="text-2xl font-bold mb-4">Allie Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
              {allies.map(allie => (
              <div key={allie.id} className="bg-white rounded-lg shadow-md p-4">
                  <img src={allie.image} alt={allie.allieName} className="w-full h-40 object-cover mb-4" />
                  <div className="text-gray-800">
                    <h3 className="font-bold text-lg mb-2">{allie.allieName}</h3>
                    <p><span className="font-bold">Contact:</span> {allie.contact}</p>
                    <p><span className="font-bold">Fees:</span> {allie.fees}</p>
                    {/* <p><span className="font-bold">Type of Allie:</span> {allie.type_of_allie}</p> */}
                  </div>
              </div>
              ))}
        </div>
        <div>
          <Testimonials />
          <Contact />
          <Footer/>
        </div>
      </div>
    );
}

export default View_services