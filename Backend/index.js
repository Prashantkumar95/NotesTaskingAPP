const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const AuthRouter = require('./Routes/AuthRouter');
const NoteRouter = require('./Routes/NoteRouter');
const mongoose = require('mongoose');

require('dotenv').config();

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Connected to MongoDB');
    } catch (err) {
        console.error('❌ Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process if MongoDB connection fails
    }
};

connectDB();

const PORT = process.env.PORT || 8090;

// CORS Configuration
const allowedOrigins = [
    'https://ideavolt.vercel.app/', // Your frontend URL
    'http://localhost:3000', // Allow local development
    'https://ideavolt-prashantkumar95s-projects.vercel.app/',
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., mobile apps, Postman)
        if (!origin) return callback(null, true);

        // Check if the origin is allowed
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Allow cookies and credentials
}));

// Middleware
app.use(bodyParser.json());

// Test Route
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Routes
app.use('/auth', AuthRouter);
app.use('/api', NoteRouter);

// Serve static files for production
if (process.env.NODE_ENV === 'production') {
    const frontendPath = path.join(__dirname, 'Frontend', 'dist'); // Path to your frontend build
    app.use(express.static(frontendPath));

    // Serve the frontend's index.html for all routes
    app.get('*', (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
}

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});



// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const AuthRouter = require('./Routes/AuthRouter');
// const NoteRouter = require('./Routes/NoteRouter');
// const mongoose = require('mongoose');

// require('dotenv').config();

// // MongoDB Connection
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_CONN, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('✅ Connected to MongoDB');
//     } catch (err) {
//         console.error('❌ Error connecting to MongoDB:', err);
//         process.exit(1); // Exit the process if MongoDB connection fails
//     }
// };

// connectDB();

// const PORT = process.env.PORT || 8090;

// // Simple CORS middleware that allows all origins
// app.use(cors({
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only specific HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
//     credentials: true, // Allow cookies and credentials to be sent with requests
// }));

// // Middleware
// app.use(bodyParser.json());

// // Test Route
// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });

// // Routes
// app.use('/auth', AuthRouter);
// app.use('/api', NoteRouter);

// // Serve static files for production
// if (process.env.NODE_ENV === 'production') {
//     const frontendPath = path.join(__dirname, 'Frontend', 'dist'); // Path to your frontend build folder
//     app.use(express.static(frontendPath));

//     // Serve the frontend's index.html for all routes
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(frontendPath, 'index.html'));
//     });
// }

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//     console.error('Error: ', err.message);
//     console.error(err.stack);
//     res.status(500).json({ message: 'Something went wrong!' });
// });

// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server is running on port ${PORT}`);
// });
