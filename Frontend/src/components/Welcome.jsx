// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Welcome() {
//   const navigate = useNavigate();

//   const handlenotes = () => {
//     navigate('/notes');
//   };

//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
//       <h2 className="text-4xl font-bold mb-4 text-center text-gray-100">
//         Welcome to <span className="text-blue-500">Notezy</span> !!
//       </h2>
//       <p className="text-lg text-gray-300 mb-8 text-center">
//         Here you can create, edit, and delete notes with ease.
//       </p>

//       <button
//         onClick={handlenotes}
//         className="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
//       >
//         Get Started
//       </button>
//     </div>
//   );
// }

// export default Welcome;


import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handlenotes = () => {
    navigate('/notes');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 flex flex-col items-center justify-center text-white p-6">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-100 tracking-tight leading-tight mb-6">
          Welcome to <span className="text-yellow-400">IdeaVolt</span> !!
        </h2>
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-lg mx-auto leading-relaxed">
          Organize your thoughts, manage your tasks, and create beautiful notes with ease. Let’s make productivity fun!
        </p>

        <button
          onClick={handlenotes}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold py-4 px-10 rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-60"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome;
