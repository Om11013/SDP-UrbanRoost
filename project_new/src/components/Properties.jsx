import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Properties = () => {
  const [properties, setProperties] = useState([])
  const { id } = useParams()
  const [prop, setProp] = useState(null)

  useEffect(() => {
    fetch('https://silent-plane-production.up.railway.app/property/getAll')
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error('Error fetching properties:', error))
  }, [])

  useEffect(() => {
    const foundProperty = properties.find((p) => p.id === parseInt(id))
    if (foundProperty) {
      setProp(foundProperty)
    }
  }, [id, properties])

  if (!prop) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="flex-1 mr-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={prop.image}
              alt={prop.ownerName}
              className="w-full h-auto object-cover rounded-t-lg"
              style={{ maxHeight: '50vh' }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{prop.ownerName}</h3>
              <div className="mb-2">
                <span className="font-bold">Contact:</span> {prop.contact}
              </div>
              <div className="mb-2">
                <span className="font-bold">Location:</span> {prop.location}
              </div>
              <div className="mb-2">
                <span className="font-bold">Rent:</span> {prop.rent}
              </div>
              <div className="mb-2">
                <span className="font-bold">Available:</span> {prop.availability ? 'Yes' : 'No'}
              </div>
              <div className="mb-2">
                <span className="font-bold">Occupied:</span> {prop.occupied ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Link to="/Maintenance">
            <img
              src={'https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg'}
              alt="Another Image"
              className="w-auto h-auto object-cover rounded-t-lg justify-center"
              style={{ maxHeight: '80vh' }}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Properties
