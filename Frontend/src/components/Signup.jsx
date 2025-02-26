// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { handlError, handleSuccess } from '../utils';

// const SignUp = () => {
// const [signupInfo , setsignupInfo] = useState({
//   name:'',
//   email:'',
//   password:'',

// });

//   const navigate = useNavigate ();
//   const navigate2 = useNavigate ();

//   const  handleswtichforLogin = () =>{
//     navigate('/login')

// }
//     const handleChange = (e) =>{
//       const {name , value} = e.target;
//       console.log(name,value);
//       const  copysignupInfo = {...signupInfo};
//       copysignupInfo[name] = value;
//       setsignupInfo(copysignupInfo);

//     }
    

//     const handleSignup= async(e) =>{
//       e.preventDefault();
      
//     const {name , email , password} = signupInfo;
//     if(!name || !email || !password){
//       return handlError('Please fill all the fields');
//     }

// try{
//   const url = "http://localhost:8080/auth/signup";
//   const response = await fetch(url,{
//     method: 'POST',
//     headers:{
//       'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(signupInfo)
      
//     });
//     const result = await response .json();
//     const {success , message , error}  = result;
//     if(success ){
//       handleSuccess(message);
   
//     setTimeout(() =>{
//       navigate2('/login');
//     },1000)
//  }else if(error){
//   const details =  error?.details[0].message;
//   handlError(details);
//  } 
//  else if(!success){
//   handlError(message);
//  }

//     console.log(result);
// }catch (err){
//   handlError(err);


// }}

  
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105">
//         <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h2>
//         <form className="space-y-6" onSubmit={handleSignup}>
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-300">
//               Full Name
//             </label>
//             <input
//             onChange={handleChange}
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your full name"
//               value={signupInfo.name}
//               autoFocus
//               className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               required
//             />
//           </div>
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
//               value={signupInfo.email}
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
//               value={signupInfo.password}
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
//               Create Account
//             </button>
//           </div>
//         </form>
//         <ToastContainer />

//         <div className="mt-6 text-center">
//           <span className="text-sm text-gray-400">Already have an account? </span>
//           <button className="text-sm text-blue-500 hover:text-blue-400" onClick={handleswtichforLogin}>
//             Log In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handlError, handleSuccess } from '../utils';

const SignUp = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSwitchToLogin = () => navigate('/login');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo(prev => ({ 
      ...prev, 
      [name]: value 
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!signupInfo.name.trim()) newErrors.name = 'Name is required';
    if (!signupInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(signupInfo.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!signupInfo.password) {
      newErrors.password = 'Password is required';
    } else if (signupInfo.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("https://notestaskingapp-backend-oejn.onrender.com/auth/signup", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo)
      });
      
      const result = await response.json();
      
      if (result.success) {
        handleSuccess(result.message);
        setTimeout(() => navigate('/login'), 1000);
      } else {
        handlError(result.message || 'Signup failed');
        if (result.error) {
          const serverErrors = {};
          result.error.details.forEach(err => {
            const field = err.path[0];
            serverErrors[field] = err.message;
          });
          setErrors(serverErrors);
        }
      }
    } catch (err) {
      handlError('Network error - please try again later');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="bg-gray-800/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md transform transition-all">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-gray-400 mt-2">Join IdeaVolt to organize your ideas</p>
        </div>

        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Full Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={signupInfo.name}
              className={`w-full px-4 py-3 bg-gray-700/50 border ${
                errors.name ? 'border-red-500' : 'border-gray-600'
              } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={signupInfo.email}
              className={`w-full px-4 py-3 bg-gray-700/50 border ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={signupInfo.password}
              className={`w-full px-4 py-3 bg-gray-700/50 border ${
                errors.password ? 'border-red-500' : 'border-gray-600'
              } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <button 
              onClick={handleSwitchToLogin}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Log In
            </button>
          </p>
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

export default SignUp;
