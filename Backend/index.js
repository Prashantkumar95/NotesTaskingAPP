// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AuthRouter = require('./Routes/AuthRouter');
// const NoteRouter = require('./Routes/NoteRouter');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const connectDB = async () =>{
//     console.log("inside")
//     await mongoose.connect(process.env.MONGO_CONN)
//     .then(() => console.log('✅ Connected to MongoDB'))
//     .catch(err => console.error('❌ Error connecting to MongoDB:', err));

// }

// connectDB()

// const PORT = process.env.PORT || 8090;

// // Test Route
// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// app.use('/auth', AuthRouter);
// app.use('/api', NoteRouter);

// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server is running on port ${PORT}`);
// });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Add this for static file handling
const AuthRouter = require('./Routes/AuthRouter');
const NoteRouter = require('./Routes/NoteRouter');
const mongoose = require('mongoose');

require('dotenv').config();

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN);
        console.log('✅ Connected to MongoDB');
    } catch (err) {
        console.error('❌ Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process if MongoDB connection fails
    }
};

connectDB();

const PORT = process.env.PORT || 8090;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React app (if client is built)
if (process.env.NODE_ENV === 'production') {
    // Set the static folder
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

// Test Route
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Routes
app.use('/auth', AuthRouter);
app.use('/api', NoteRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});