import React, { useState, useEffect } from 'react';

function Buyer_view_properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/property/getAll')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div>
      <h2>Real Estate Properties</h2>
      <div className="property-list">
        {properties.map(property => (
          <div key={property.id} className="property">
            {/* <img src={property.image} /> */}
              <h3 className='text-white'>${property.rent}</h3>
              <p>{property.description}</p>
              <p>Price: ${property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buyer_view_properties;