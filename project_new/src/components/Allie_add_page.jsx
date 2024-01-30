import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const typesOfAllies = ['Cleaners', 'Milkmen', 'Carpenters', 'Plumbers', 'Painters'];

const initialState = {
  allieName: '',
  contactNo: '',
  fees: '',
  available: false,
  occupied: false,
  location: '',
  image: ''
}
const Allie_add_page = () => {

  const [state, setState] = useState(initialState);

  const handleChange = (event) => { 
    setState({...state,[event.target.name]:event.target.value});
  }
  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log("Form Data:", state);
    fetch("http://localhost:8080/allie/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
    }).then(() => {
        console.log("New Entry done")
    }).catch(error=>console.error('Error occured: ',error));
    }

    const handleSelectChange = (event) => { 
        const selectedOptions = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setState({
            ...state, allieTypes: selectedOptions
        });
    }

  useEffect(()=>{
    fetch("http://localhost:8080/allie/getAll")
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
          <img src="https://pilipinasatbp.files.wordpress.com/2018/03/stock-photo-group-of-smiling-people-with-different-jobs-standing-in-line-on-white-background-128885864.jpg" alt="Allie Image" className="object-cover w-full h-full" />
        </div>

        {/* Right Half - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">Add Your Services</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="allieName" className="block text-sm font-medium text-gray-700">Allie Name</label>
              <input type="text" id="allieName" name="allieName" value={state.allieName} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">Contact No</label>
              <input type="tel" id="contactNo" pattern="[0-9]{10}" name="contactNo" value={state.contactNo} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="fees" className="block text-sm font-medium text-gray-700">Fees</label>
              <input type="number" id="fees" name="fees" value={state.fees} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
                <label htmlFor="allieTypes" className="block text-sm font-medium text-gray-700">Type Of Allies: </label>
                <select name="allieTypes" id="allieTypes" value={state.allieTypes} onChange={handleSelectChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" >
                    {typesOfAllies.map((allieTypes) => (
                        <option value={allieTypes} key={allieTypes}>
                            { allieTypes}
                        </option>
                    )) }
                </select>              
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Service</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Allie_add_page;