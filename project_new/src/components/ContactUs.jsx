import React from 'react'
import Navbar from './Navbar'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-900">Email</dt>
                <dd className="mt-1 text-base text-gray-700 sm:col-span-2">info@urbanroost.com</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-900">Phone</dt>
                <dd className="mt-1 text-base text-gray-700 sm:col-span-2">+1 (123) 456-7890</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-900">Address</dt>
                <dd className="mt-1 text-base text-gray-700 sm:col-span-2">123 Main Street, City, Country</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactUs
