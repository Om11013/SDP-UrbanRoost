// ContactUsPage.js
import React from 'react';
import Navbar from './Navbar'; // Adjust the path based on your project structure

const ContactUs = () => {
  return (
    <div className="bg-black min-h-screen ">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact UrbanRoost</h1>

        <section className="mb-8">
          <p className="text-gray-400 mb-4">
            We would love to hear from you! If you have any questions, feedback, or inquiries, feel free to reach out to us.
          </p>
          <p className="text-gray-400">
            You can contact us via email at <strong>info@urbanroost.com</strong> or use the form below.
          </p>
        </section>

        <section className="mb-8">
          {/* Add your contact form component here */}
          <form>
            {/* Your form fields go here */}
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <p className="text-gray-400">
            UrbanRoost Headquarters<br />
            123 Main Street<br />
            Cityville, State 12345<br />
            United States
          </p>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
