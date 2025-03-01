// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // Header Component
// function Header() {
//   const navigate = useNavigate();

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//           IdeaVolt
//         </h1>
//         <div className="flex space-x-4">
//           <button 
//             className="text-gray-300 hover:text-white transition font-medium"
//             onClick={() => navigate("/sign")}
//           >
//             Sign Up
//           </button>
//           <button 
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// // Hero Component
// function Hero() {
//   const [currentTime, setCurrentTime] = useState("");
//   const navigate = useNavigate();

//   // Function to format the time
//   const formatTime = (time) => {
//     const options = { hour: '2-digit', minute: '2-digit', hour12: true };
//     return time.toLocaleString('en-US', options);
//   };

//   // Update the time every minute
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(formatTime(new Date()));
//     }, 60000); // Update every minute

//     // Set the initial time
//     setCurrentTime(formatTime(new Date()));

//     return () => clearInterval(timer); // Clean up the timer on component unmount
//   }, []);

//   // Example API call using the backend URL
//   const handleLogin = async (email, password) => {
//     const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8090";
//     try {
//       const response = await fetch(`${backendUrl}/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       console.log("Login successful:", data);
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <section 
//         className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-20 relative bg-gray-900"
//         style={{
//           backgroundImage: `linear-gradient(to bottom right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.7)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
//           {/* Left Section */}
//           <div className="space-y-6">
//             <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               All your notes.<br />
//               Organized.<br />
//               Effortless.
//             </h1>
//             <p className="text-gray-300 text-lg max-w-md">
//               Capture ideas anywhere. Organize intuitively. Access seamlessly across all devices.
//             </p>
//             <button 
//               className="bg-blue-600 text-white px-8 py-4 font-semibold rounded-xl hover:bg-blue-700 transition transform hover:scale-105"
//               onClick={() => navigate("/sign")}
//             >
//               Get Started — Free Forever
//             </button>
//             <div className="mt-8 p-4 border-l-4 border-blue-500 bg-gray-800/50 rounded-r-lg">
//               <p className="text-gray-300 italic">
//                 “IdeaVolt transformed how I manage projects - now my team stays perfectly synced”
//               </p>
//             </div>
//           </div>

//           {/* Right Section - Notes Preview */}
//           <div className="relative group">
//             <div className="absolute inset-0 bg-blue-500/10 rounded-2xl filter blur-xl animate-pulse"></div>
//             <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl transform group-hover:rotate-1 transition">
//               <div className="flex justify-between text-gray-400 text-sm mb-4">
//                 <p>🕒 {currentTime}</p>
//                 <p>📁 Personal Projects</p>
//               </div>
//               <h3 className="text-white font-bold text-xl mb-4">Q4 Product Launch</h3>
//               <ul className="text-gray-300 space-y-3 text-sm">
//                 <li className="flex items-center">
//                   <span className="text-green-400 mr-2">✓</span>
//                   Finalize mobile prototype
//                 </li>
//                 <li className="flex items-center">
//                   <span className="text-yellow-400 mr-2">◯</span>
//                   Coordinate with marketing team
//                 </li>
//                 <li className="flex items-center">
//                   <span className="text-blue-400 mr-2">⏳</span>
//                   Review analytics dashboard
//                 </li>
//               </ul>
//               <div className="mt-6 pt-4 border-t border-gray-700">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
//                     <span className="text-white">A</span>
//                   </div>
//                   <div>
//                     <p className="text-blue-400 font-medium">Alex Chen</p>
//                     <p className="text-gray-400 text-sm">Let's prioritize dark mode implementation</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Hero;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Header Component
function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          IdeaVolt
        </h1>
        <div className="flex space-x-4">
          <button 
            className="text-gray-300 hover:text-white transition font-medium"
            onClick={() => navigate("/sign")}
          >
            Sign Up
          </button>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

// Hero Component
function Hero() {
  const [currentTime, setCurrentTime] = useState("");
  const navigate = useNavigate();

  // Function to format the time
  const formatTime = (time) => {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return time.toLocaleString('en-US', options);
  };

  // Update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 60000); // Update every minute

    // Set the initial time
    setCurrentTime(formatTime(new Date()));

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  // Example API call using the backend URL
  const handleLogin = async (email, password) => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8090";
    try {
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <Header />
      <section 
        className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-20 relative bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.7)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              All your notes.<br />
              Organized.<br />
              Effortless.
            </h1>
            <p className="text-gray-300 text-lg max-w-md">
              Capture ideas anywhere. Organize intuitively. Access seamlessly across all devices.
            </p>
            <button 
              className="bg-blue-600 text-white px-8 py-4 font-semibold rounded-xl hover:bg-blue-700 transition transform hover:scale-105"
              onClick={() => navigate("/sign")}
            >
              Get Started — Free Forever
            </button>
            <div className="mt-8 p-4 border-l-4 border-blue-500 bg-gray-800/50 rounded-r-lg">
              <p className="text-gray-300 italic">
                “IdeaVolt transformed how I manage projects - now my team stays perfectly synced”
              </p>
            </div>
          </div>

          {/* Right Section - Notes Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl filter blur-xl animate-pulse"></div>
            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl transform group-hover:rotate-1 transition">
              <div className="flex justify-between text-gray-400 text-sm mb-4">
                <p>🕒 {currentTime}</p>
                <p>📁 Personal Projects</p>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Q4 Product Launch</h3>
              <ul className="text-gray-300 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Finalize mobile prototype
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">◯</span>
                  Coordinate with marketing team
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">⏳</span>
                  Review analytics dashboard
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                    <span className="text-white">A</span>
                  </div>
                  <div>
                    <p className="text-blue-400 font-medium">Alex Chen</p>
                    <p className="text-gray-400 text-sm">Let's prioritize dark mode implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;