import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }; 

  return (
      <div className=' p-4 flex justify-between items-center h-24 max-w-[1200px] mx-auto px-auto text-white'>
        <h1 className='w-10 text-4xl text-amber-400 font-extrabold'><Link to="/">UrbanRoost</Link></h1>
        <ul className=' hidden md:flex '>
          <li className='p-4  hover:bg-slate-700 rounded-md '><Link to="/">Home</Link></li>
          <li className='p-4  hover:bg-slate-700 rounded-md '><Link to="/aboutus">About Us</Link></li>
          <li className='p-4  hover:bg-slate-700 rounded-md '><Link to="/contactus">Contact Us</Link></li>
          <li className='p-4  hover:bg-slate-700 rounded-md '><Link to="/signup">Sign Up</Link></li>
          {/* <li className='p-4 hover:bg-slate-700 rounded-md ' ><Link to="/signin">Sign In</Link></li> */}
          <li className='p-4 hover:bg-slate-700 rounded-md ' ><Link to="/Pg_owner_dashboard">Pg_owner_dashboard</Link></li>
          <li className='p-4 hover:bg-slate-700 rounded-md ' ><Link to="/Allie_dashboard">Allie_dashboard</Link></li>
          <li className='p-4 hover:bg-slate-700 rounded-md ' ><Link to="/Buyer_view_properties">View Properties</Link></li>
          <li className='p-4 hover:bg-slate-700 rounded-md ' ><Link to="/View_services">View Services</Link></li>
          

          
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <RxCross1 size={20} /> : <FiMenu size={20} />}
        </div>
        <div className={!nav ?  'fixed left-[-100%]':'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-500 bg-gray-500 ease-in-out duration-300' }>
          <div className='flex'>
            <div className='inline-block'>
              <h1 className='p-3 w-full text-4xl text-amber-400 font-extrabold m-auto p-auto'>UrbanRoost</h1>
            </div>
            {/* <div onClick={handleNav} className='inline-block ml-auto pt-3'>
              {!nav ? <RxCross1 size={20} /> : <FiMenu size={20} />}
            </div> */}
          </div>

          <ul className='uppercase p-4'>
            <li className='text-black p-4 border-b border-b-gray-600'><Link to="/">Home</Link></li>
            <li className='text-black p-4 border-b border-b-gray-600'><Link to="/aboutus">About Us</Link></li>
            <li className='text-black p-4 border-b border-b-gray-600'><Link to="/contactus">Contact Us</Link></li>
          <li className='text-black p-4 border-b border-b-gray-600'><Link to="/signin">Sign In</Link></li>
          <li className='text-black p-4 border-b border-b-gray-600'><Link to="/signup">Sign Up</Link></li>

          </ul>
        </div>
      </div>
  );
};

export default Navbar;
