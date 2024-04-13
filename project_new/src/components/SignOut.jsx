import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import toast from 'react-hot-toast'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN

const SignOut = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const inputChange = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value,
    })
  }

  //   axios.post("https://silent-plane-production.up.railway.app/user/login", state, {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(response => {
  //     const { id, role } = response.data;

  //     console.log("User ID:", id);
  //     console.log("Role:", role);

  //     console.log("User verified");
  //     toast("User verified");
  //     alert("User verified");
  //     navigate("/", { state: { role: role } });

  //   })
  //   .catch(error => {
  //     console.error('Error occurred: ', error);
  //     toast("User not present");
  //     alert("User not present");
  //   });

  const handleDelete = (id) => {
    axios
      .delete(`https://silent-plane-production.up.railway.app/user/${id}`)
      .then((response) => {
        setState(state.filter((state) => state.id !== id))
        console.log('User ID:', id)
        // console.log("Role:", role);
        toast('User Deleted')
      })
      .catch((error) => {
        console.error('Error deleting user: ', error)
        toast('User Not Deleted')
      })
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-gray-800 text-2xl font-semibold mb-4">Sign Out</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={inputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 text-sm mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={state.password}
                onChange={inputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
              onClick={() => handleDelete(state.id)}
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignOut
