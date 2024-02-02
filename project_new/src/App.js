import './App.css';
import React from 'react';
import Hero from './components/Hero';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs'; 
import ContactUs from './components/ContactUs';
import Pg_owner_dashboard from './components/Pg_owner_dashboard';
import Pg_add_page from './components/Pg_add_page';
import Allie_dashboard from './components/Allie_dashboard';
import Allie_add_page from './components/Allie_add_page';
import Buyer_view_properties from './components/Buyer_view_properties';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/navbar" element={<Navbar />} />
            <Route exact path="/aboutus" element={ <AboutUs/>}/>
            <Route exact path="/contactus" element={ <ContactUs/>}/>
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path="/Pg_owner_dashboard" element={<Pg_owner_dashboard/>} />
            <Route exact path="/Pg_add_page" element={<Pg_add_page />} />
            <Route exact path="/Allie_dashboard" element={<Allie_dashboard />} />
            <Route exact path="/Allie_add_page" element={ <Allie_add_page/>}/>
            <Route exact path="/Buyer_view_properties" element={ <Buyer_view_properties/>}/>

          </Routes>
        </div>
      </div>
    </BrowserRouter>

    // <div>
    //   </>
    // </div>
  );
}

export default App;