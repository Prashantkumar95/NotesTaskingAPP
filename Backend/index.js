const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const NoteRouter = require('./Routes/NoteRouter');
const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () =>{
    console.log("inside")
    await mongoose.connect(process.env.MONGO_CONN)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ Error connecting to MongoDB:', err));

}

connectDB()

const PORT = process.env.PORT || 8090;


// CORS Configuration
const allowedOrigins = [
    'https://ideavolt-frontend.onrender.com', 
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Test Route
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', AuthRouter);
app.use('/api', NoteRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path'); 
// const AuthRouter = require('./Backend/Routes/AuthRouter.jd'); // Updated path
// const NoteRouter = require('./Backend/Routes/NoteRouter'); // Updated path
// const mongoose = require('mongoose');

// require('dotenv').config();

// // MongoDB Connection
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_CONN);
//         console.log('✅ Connected to MongoDB');
//     } catch (err) {
//         console.error('❌ Error connecting to MongoDB:', err);
//         process.exit(1); 
//     }
// };

// connectDB();

// const PORT = process.env.PORT || 8090;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Serve static files from the React app (if client is built)
// if (process.env.NODE_ENV === 'production') {
//     const frontendPath = path.join(__dirname, 'Frontend', 'dist'); // Use 'dist' for Vite
//     app.use(express.static(frontendPath));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(frontendPath, 'index.html'));
//     });
// }

// // Test Route
// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });

// // Routes
// app.use('/auth', AuthRouter);
// app.use('/api', NoteRouter);

// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server is running on port ${PORT}`);
// });
