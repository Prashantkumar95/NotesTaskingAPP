const mongoose = require('mongoose');
require('dotenv').config(); // Ensure you load environment variables

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_CONN)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ Error connecting to MongoDB:', err));

}

modules.export = connectDB