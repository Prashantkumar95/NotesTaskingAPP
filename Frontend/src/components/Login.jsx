// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { handlError, handleSuccess } from '../utils';

// const Login = () => {
//   const [loginInfo , setloginInfo] = useState({
//     email:'',
//     password:'',
  
//   });
  
//     const navigate = useNavigate();
//      const navigate2 = useNavigate ();

//     const handleSwtichtoSignup = () => {
//         navigate('/sign');

//     }
//         const handleChange = (e) =>{
//           const {name , value} = e.target;
//           console.log(name,value);
//           const  copyloginInfo = {...loginInfo};
//           copyloginInfo[name] = value;
//           setloginInfo(copyloginInfo);
    
//         }
        
    
//         const handlelogin= async(e) =>{
//           e.preventDefault();
          
//         const { email , password} = loginInfo;
//         if( !email || !password){
//           alert('Please fill in all fields');
//         }
    
//     try{
//       const url = "http://localhost:8080/auth/login";
//       const response = await fetch(url,{
//         method: 'POST',
//         headers:{
//           'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(loginInfo)
          
//         })
//         const result = await response .json();
//         const {jwtToken , name ,success , message , error} = result;
//         if(success ){
//               handleSuccess(message);

//         localStorage.setItem('token',jwtToken);
//         localStorage.setItem('loggedInuser',name);

//         setTimeout(() =>{
//           navigate2('/notes');
//         },1000)
//       }
//   else if(error){
//     const details =  error?.details[0].message;
//     handlError(details);
//    } 
//    else if(!success){
//     handlError(message);
//    }
  
//       console.log(result);
//   }catch (err){
//     handlError(err);
  
  
//   }}
      
    
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105">
//         <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
//         <form className="space-y-6" onSubmit={handlelogin}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//               Email
//             </label>
//             <input
//             onChange={handleChange}
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={loginInfo.email}
//               autoFocus
//               className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-300">
//               Password
//             </label>
//             <input
//             onChange={handleChange}
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={loginInfo.password}
//               autoFocus
//               className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               required
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>
//         <ToastContainer/>
//         <div className="mt-6 text-center">
//           <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
//             Forgot your password?
//           </a>
//         </div>
//         <div className="mt-4 text-center">
//           <span className="text-sm text-gray-400">Don't have an account? </span>
//           <button className="text-sm text-blue-500 hover:text-blue-400" onClick={handleSwtichtoSignup}>
//             Sign up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handlError, handleSuccess } from '../utils';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  
  const navigate = useNavigate();

  const handleSwitchToSignup = () => {
    navigate('/sign');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    
    if (!email || !password) {
      handlError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch("https://notestaskingapp-backend-oejn.onrender.com/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo)
      });

      const result = await response.json();
      
      if (result.success) {
        handleSuccess(result.message);
        localStorage.setItem('token', result.jwtToken);
        localStorage.setItem('loggedInUser', result.name);
        
        setTimeout(() => {
          navigate('/notes');
        }, 1000);
      } else {
        const errorMessage = result.error?.details?.[0]?.message || result.message || 'Login failed';
        handlError(errorMessage);
      }
    } catch (err) {
      handlError(err.message || 'An error occurred during login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="relative bg-gray-800/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md transform transition-all hover:shadow-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2">Sign in to continue to IdeaVolt</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
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
