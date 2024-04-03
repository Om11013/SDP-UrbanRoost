import React from 'react'
import Navbar from './Navbar'

const AboutUsPage = () => {
  return (
    <div className="text-white min-h-screen p-8">
      <Navbar1 />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About UrbanRoost</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-500">
            At UrbanRoost, we aim to simplify the process of finding a suitable dwelling for individuals while
            streamlining the property listing process for owners. Our platform is designed to eliminate the stress
            associated with traditional methods like brokers and brokerage fees.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>
              Individuals can easily find a suitable dwelling based on filters such as rent, ratings, facilities, and
              location.
            </li>
            <li>Owners can effortlessly list their properties, including flats, rooms, tenements, hostels, etc.</li>
            <li>No need to undergo the stress of finding brokers and paying brokerage fees for tenants and owners.</li>
            <li>
              Domestic allies like milkmen, cleaners, cooks, tiffin providers, laundry, etc., can enlist their services.
            </li>
            <li>Owners have access to track records of tenant activities, including rent payments.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join UrbanRoost Today!</h2>
          <p className="text-gray-500">
            Experience the ease of finding your ideal dwelling or listing your property hassle-free. UrbanRoost is not
            just a platform; it's a community that connects residents and property owners seamlessly.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutUsPage

export function Navbar1() {
  return <Navbar />
}
