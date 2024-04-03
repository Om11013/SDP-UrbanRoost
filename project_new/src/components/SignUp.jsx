import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import toast from 'react-hot-toast'
import axios from 'axios'

const initialState = {
  username: '',
  contact: '',
  email: '',
  password: '',
  role: '',
}

const SignUp = () => {
  const [state, setState] = useState(initialState)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { username, contact, email, password, role } = state

    if (!username || !contact || !email || !password || !role) {
      return toast.error('Input field should not be empty')
    }

    try {
      await axios.post(`http://localhost:8080/${state.role}/add`, state)
      await axios.post(`http://localhost:8080/user/add`, state)

      console.log(`${state.role} Entry done`)
      toast(`${state.role} entry done`)
    } catch (error) {
      console.error('Error occurred: ', error)
    }

    navigate('/signin', { state: { role: state.role } })
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-gray-800 text-2xl font-semibold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              <span className="mr-2">Account Type:</span>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="isSecretary"
                  name="role"
                  value="secretary"
                  checked={state.role === 'secretary'}
                  onChange={handleChange}
                />
                <span className="ml-1">Secretary</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  id="isOwner"
                  name="role"
                  value="owner"
                  checked={state.role === 'owner'}
                  onChange={handleChange}
                />
                <span className="ml-1">Owner</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  id="isAllie"
                  name="role"
                  value="allie"
                  checked={state.role === 'allie'}
                  onChange={handleChange}
                />
                <span className="ml-1">Allie</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  id="isBroker"
                  name="role"
                  value="broker"
                  checked={state.role === 'broker'}
                  onChange={handleChange}
                />
                <span className="ml-1">Broker</span>
              </label>
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-600 text-sm mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={state.username}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-gray-600 text-sm mb-2">
                Contact:
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={state.contact}
                pattern="[0-9]{10}"
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600 text-sm mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white my-2 p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-sm">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp
