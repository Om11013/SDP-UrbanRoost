import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const initialState = {
  ownerName: '',
  contact: '',
  rent: '',
  availability: '', 
  location: '',
  image: ''
};

const Pg_add_page = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", state);
    axios.post("http://localhost:8080/property/add", state)
      .then(() => {
        console.log("New Entry done")
      })
      .catch(error => {
        console.error('Error occurred: ', error);
      });
  }
  
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2">
            <img src="https://images.pexels.com/photos/1774931/pexels-photo-1774931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="PG Image" className="object-cover w-full h-full" />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-4">Add Your Listing</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Name</label>
                <input type="text" id="ownerName" name="ownerName" value={state.ownerName} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact No</label>
                <input type="tel" id="contact" pattern="[0-9]{10}" name="contact" value={state.contact} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div> 
                <label htmlFor="rent" className="block text-sm font-medium text-gray-700">Rent</label>
                <input type="number" id="rent" pattern="[0-9]{1,5}" name="rent" value={state.rent} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability of Room</label>
                <select id="availability" name="availability" value={state.availability} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="available">Available</option>
                  <option value="occupied">Occupied</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" id="location" name="location" value={state.location} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                <input type="text" id="image" name="image" value={state.image} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Property</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pg_add_page;
