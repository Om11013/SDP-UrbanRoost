import React from 'react'

const Footer = () => {
    return (
      <footer className="w-sceeen bg-gray-800 text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center">&copy; {new Date().getFullYear()} UrbanRoost. All rights reserved.</p>
        </div>
      </footer>
    );
  }

export default Footer