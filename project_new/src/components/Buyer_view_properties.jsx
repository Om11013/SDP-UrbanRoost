import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Testimonials from './Testimonials'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'

const initialState = {
  availability: 'No',
}

function Buyer_view_properties() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch('https://silent-plane-production.up.railway.app/property/getAll')
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error('Error fetching properties:', error))
    console.log(properties)
  }, [])

  return (
    <div className="bg-gray-400">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Real Estate Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-5">
        {properties.map((property) => (
          <Link to={`/properties/${property.id}`} key={property.id}>
            <div key={property.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={property.image} alt={property.ownerName} className="w-full h-40 object-cover mb-4" />
              <div className="text-gray-800">
                <h3 className="font-bold text-lg mb-2">{property.ownerName}</h3>
                <p>
                  <span className="font-bold">Contact:</span> {property.contact}
                </p>
                <p>
                  <span className="font-bold">Location:</span> {property.location}
                </p>
                <p>
                  <span className="font-bold">Rent:</span> {property.rent}
                </p>
                <p>
                  <span className="font-bold">Available:</span> {property.availability ? 'Yes' : 'No'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Buyer_view_properties
