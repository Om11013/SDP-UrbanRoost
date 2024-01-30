// SignUp.js
import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';


const initialState = {
  fullname: '',
  contact: '',
  email: '',
  password: '',
  role:''
}

const SignUp = () => {

  const [state, setState] = useState(initialState);

  const handleChange = (event) => { 
      setState({...state,[event.target.name]:event.target.value});
  }

  const handleSubmit = (event) => { 
      event.preventDefault();
      console.log("Form Data:", state);
      fetch("http://localhost:8080/owner/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state)
      }).then(() => {
          console.log("New Entry done")
      }).catch(error=>console.error('Error occured: ',error));
  }
  useEffect(()=>{
      fetch("http://localhost:8080/owner/getAll")
      .then(res=>res.json())
      .then((state)=>{
        setState(state);
      }
    )
    },[])

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-gray-800 text-2xl font-semibold mb-4">Sign Up</h2>
        
        <form onSubmit={handleSubmit}>
        <div className="my-2" >Account Type:  
                  <input type="radio" id="isOwner" name="role" value="owner" checked={state.role === "owner"} onChange={handleChange}/>
                  <label htmlFor="isOwner" >Owner</label>
                  <input type="radio" id="isBuyer" name="role" value="buyer" checked={state.role === "buyer"} onChange={handleChange}/>
                  <label htmlFor="isbuyer">Buyer</label>
                  <input type="radio" id="isAllie" name="role" value="allie" checked={state.role === "allie"} onChange={handleChange}/>
                  <label htmlFor="isAllie">Allie</label>
        </div>
          <div>
                  <label htmlFor="fullname" className="block text-gray-600 text-sm mb-2">Fullname: </label>
                  <input type="text" id="fullname" name="fullname" value={state.fullname} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
              </div>
              <div>
                  <label htmlFor="contact" className="block text-gray-600 text-sm mb-2">Contact: </label>
                  <input type="tel" id="contact" name="contact" value={state.contact} pattern="[0-9]{10}" onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
              </div>
              <div>
                  <label htmlFor="email" className="block text-gray-600 text-sm mb-2">Email: </label>
                  <input type="email" id="email" name="email" value={state.email} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
              </div>
              <div>
                  <label htmlFor="password" className="block text-gray-600 text-sm mb-2">Password: </label>
                  <input type="password" id="password" name="password" value={state.password} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
              </div>  
          
          <button type="submit" className="w-full bg-blue-500 text-white my-2 p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500" >Submit</button>
        
        </form>

        <p className="mt-4 text-sm">Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
}

export default SignUp;