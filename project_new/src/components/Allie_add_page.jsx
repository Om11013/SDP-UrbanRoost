import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const typesOfutilities = ['Cleaners', 'Milkmen', 'Carpenters', 'Plumbers', 'Painters']

const initialState = {
  allieName: '',
  contact: '',
  fees: '',
  image: '',
  type_of_utility: '',
}

const Allie_add_page = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('Request Payload:', state)
      await axios.post('https://silent-plane-production.up.railway.app/utility/add', state)
      console.log('New Entry done')
      console.log(state)
    } catch (error) {
      console.error('Error occurred: ', error)
      if (error.response) {
        console.error('Response Data:', error.response.data)
      }
    }
  }

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value)
    setState({
      ...state,
      type_of_utility: selectedOptions,
    })
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2">
            <img
              src="https://pilipinasatbp.files.wordpress.com/2018/03/stock-photo-group-of-smiling-people-with-different-jobs-standing-in-line-on-white-background-128885864.jpg"
              alt="Allie Image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-4">Add Your Services</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="allieName" className="block text-sm font-medium text-gray-700">
                  Allie Name
                </label>
                <input
                  type="text"
                  id="allieName"
                  name="allieName"
                  value={state.allieName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                  Contact No
                </label>
                <input
                  type="tel"
                  id="contact"
                  pattern="[0-9]{10}"
                  name="contact"
                  value={state.contact}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="fees" className="block text-sm font-medium text-gray-700">
                  Fees
                </label>
                <input
                  type="number"
                  id="fees"
                  name="fees"
                  value={state.fees}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="type_of_utility" className="block text-sm font-medium text-gray-700">
                  Type Of utilities
                </label>
                <select
                  name="type_of_utility"
                  id="type_of_utility"
                  value={state.type_of_utility}
                  onChange={handleSelectChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {typesOfutilities.map((type_of_utility) => (
                    <option value={type_of_utility} key={type_of_utility}>
                      {type_of_utility}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={state.image}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Allie_add_page
