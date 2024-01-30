import React, { useEffect,useState} from 'react';
import Navbar from './Navbar';

const initialState = {
  ownerName: '',
  contactNo: '',
  rent: '',
  available: false,
  occupied: false,
  location: '',
  image: ''
}
const Pg_add_page = () => {

  const [state, setState] = useState(initialState);

  const handleChange = (event) => { 
    setState({...state,[event.target.name]:event.target.value});
  }
  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log("Form Data:", state);
    fetch("http://localhost:8080/property/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
    }).then(() => {
        console.log("New Entry done")
    }).catch(error=>console.error('Error occured: ',error));
  }
  useEffect(()=>{
    fetch("http://localhost:8080/property/getAll")
    .then(res=>res.json())
    .then((state)=>{
      setState(state);
    }
  )
  },[])
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Navbar/>
      <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Half - Image */}
        <div className="w-full md:w-1/2">
          <img src="https://images.pexels.com/photos/1774931/pexels-photo-1774931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="PG Image" className="object-cover w-full h-full" />
        </div>

        {/* Right Half - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">Add Your Listing</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Name</label>
              <input type="text" id="ownerName" name="ownerName" value={state.ownerName} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">Contact No</label>
              <input type="tel" id="contactNo" pattern="[0-9]{10}" name="contactNo" value={state.contactNo} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="rent" className="block text-sm font-medium text-gray-700">Rent</label>
              <input type="number" id="rent" name="rent" value={state.rent} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability of Room</label>
              <select id="availability" name="availability" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="available" onChange={handleChange}>Available</option>
                <option value="occupied" onChange={handleChange}>Occupied</option>
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
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add PG</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pg_add_page;