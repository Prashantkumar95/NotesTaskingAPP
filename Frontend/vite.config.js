import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/NotesTaskingApp/',
  plugins: [
    tailwindcss(),
  ],
})


// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   base: '/NotesTaskingApp/',
//   plugins: [
//     tailwindcss(),
//   ],
//   build: {
//     rollupOptions: {
//       external: [
//         // Add any other necessary external dependencies here
//       ]
//     }
//   },
//   resolve: {
//     alias: {
//       // Add this alias if the error persists
//       'react-toastify': 'react-toastify/dist/react-toastify.esm.js'
//     }
//   }
// });