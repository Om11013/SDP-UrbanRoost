import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const Allie_dashboard = () => {
    return (
      
    <div>
      <Navbar/>
      <div className="min-h-screen relative">
        <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: "url('https://jobgrin.co.in/blog/wp-content/uploads/2021/08/Boilermaker.jpg')" }}></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-36 px-4 py-8 relative z-10">
          <h1 className="text-5xl font-bold tblack mb-4">ENlist your Service</h1>

          <p className="text-lg text-black mb-8">Enlisting your Service on our platform can greatly boost your business by reaching a wider audience and streamlining the booking process for potential tenants. Showcase your services to thousands of renters and manage your bookings effortlessly.</p>

          <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Link to="/Allie_add_page">Enlist Now</Link>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 text-center mb-8">
          <p className="text-black">Discover the best experience</p>
          <p className="text-black text-sm">Join our platform today!</p>
        </div>
      </div>

      <div className="bg-gray-300 py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Statistics</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-2xl font-bold">1000+</p>
              <p>Happy Tenants</p>
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p>Verified Properties</p>
            </div>
            <div>
              <p className="text-2xl font-bold">200+</p>
              <p>Locations Covered</p>
            </div>
          </div>
        </div>
        </div>
        <div>
          <Testimonials />
          <Contact />
          <Footer/>
        </div>
    </div>
  );
};

export default Allie_dashboard;
