import React from 'react';
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-gray-800 text-2xl font-semibold mb-4">Sign In</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Choose Account Type:</label>
            <select id="accountType" className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500">
              <option value="owner">Owner</option>
              <option value="allies">Allie</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm mb-2">Password:</label>
            <input type="password" id="password" name="password" className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"><Link to="/signin">Sign In</Link></button>
        </form>

        <p className="mt-4 text-gray-600 text-sm">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default SignIn;
