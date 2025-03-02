import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from '../utils';

const Login = () => {
  const [loginInfo , setloginInfo] = useState({
    email:'',
    password:'',
  
  });
  
    const navigate = useNavigate();
     const navigate2 = useNavigate ();

    const handleSwitchToSignup = () => {
        navigate('/sign');

    }
        const handleChange = (e) =>{
          const {name , value} = e.target;
        
          const  copyloginInfo = {...loginInfo};
          copyloginInfo[name] = value;
          setloginInfo(copyloginInfo);
    
        }
        
    
        const handlelogin= async(e) =>{
          e.preventDefault();
          
        const { email , password} = loginInfo;
        if( !email || !password){
          alert('Please fill in all fields');
        }
    
    try{
      const url = "https://notes-tasking-app.vercel.app/auth/login";
      const response = await fetch(url,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginInfo)
          
        })
        const result = await response .json();
        const {jwtToken , name ,success , message , error} = result;
        if(success ){
              handleSuccess(message);

        localStorage.setItem('token',jwtToken);
        localStorage.setItem('loggedInuser',name);

        setTimeout(() =>{
          navigate2('/notes');
        },1000)
      }
  else if(error){
    const details =  error?.details[0].message;
    handleError(details);
   } 
   else if(!success){
    handleError(message);
   }
  
     
  }catch (err){
    handleError(err);
  
  
  }}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="relative bg-gray-800/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md transform transition-all hover:shadow-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2">Sign in to continue to IdeaVolt</p>
        </div>

        <form className="space-y-6" onSubmit={handlelogin}>
          <div className="space-y-4">
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={loginInfo.email}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={loginInfo.password}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-4 text-center">
          <button 
            onClick={() => {/* Add forgot password logic */}}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Forgot Password?
          </button>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <button 
                onClick={handleSwitchToSignup}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        theme="dark"
      />
    </div>
  );
};

export default Login;
