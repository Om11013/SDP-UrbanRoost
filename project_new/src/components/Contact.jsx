import React from 'react'

const Contact = () => {
    // You can replace the static content with a contact form or contact information
    return (
      <section className="w-sceeen bg-slate-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="text-center">
            <p className="mb-2">For inquiries, please email us at <a href="mailto:info@urbanroost.com" className="underline">info@urbanroost.com</a></p>
            {/* You can add more contact information such as phone numbers, office address, etc. */}
          </div>
        </div>
      </section>
    );
  }

export default Contact