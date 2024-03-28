import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const initialState = {
  availability : "No"
}

function Buyer_view_properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/property/getAll')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
      <div className='bg-gray-400'>
        <Navbar/>
        <h2 className="text-2xl font-bold mb-4">Real Estate Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-5">
            {properties.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={property.image} alt={property.ownerName} className="w-full h-40 object-cover mb-4" />
                <div className="text-gray-800">
                <h3 className="font-bold text-lg mb-2">{property.ownerName}</h3>
                <p><span className="font-bold">Contact:</span> {property.contact}</p>
                <p><span className="font-bold">Location:</span> {property.location}</p>
                <p><span className="font-bold">Rent:</span> {property.rent}</p>
                <p><span className="font-bold">Available:</span> {property.availability ? 'Yes' : 'No'}</p>
                {/* <p><span className="font-bold">Occupied:</span> {property.occupied ? 'Yes' : 'No'}</p> */}
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

export default Buyer_view_properties;


// HARD CODED TO KNOW WHAT IT LOOKS LIKE WITHOUT CALLING THE API

// import React from 'react';

// function Buyer_view_properties() {
//   // Hardcoded array of properties (15 pages)
//   const properties = Array.from({ length: 15 }, (_, index) => ({
//     id: index + 1,
//     ownerName: "Owner " + (index + 1),
//     contact: "Contact " + (index + 1),
//     rent: "Rent " + (index + 1),
//     Location: "Location " + (index + 1),
//     available: true,
//     occupied: false,
//     image: "https://via.placeholder.com/150", // Placeholder image URL
//   }));

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Real Estate Properties</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {properties.map(property => (
//           <div key={property.id} className="bg-white rounded-lg shadow-md p-4">
//             <img src={property.image} alt={property.ownerName} className="w-full h-40 object-cover mb-4" />
//             <div className="text-gray-800">
//               <h3 className="font-bold text-lg mb-2">{property.ownerName}</h3>
//               <p><span className="font-bold">Contact:</span> {property.contact}</p>
//               <p><span className="font-bold">Location:</span> {property.Location}</p>
//               <p><span className="font-bold">Rent:</span> {property.rent}</p>
//               <p><span className="font-bold">Available:</span> {property.available ? 'Yes' : 'No'}</p>
//               <p><span className="font-bold">Occupied:</span> {property.occupied ? 'Yes' : 'No'}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Buyer_view_properties;
