// Server-side  of OrcaSwipe and app's main entry point

// Import required modules
require('dotenv').config();

const express = require('express');               // Import express
const mongoose = require('mongoose');             // Import mongoose
const authRoutes = require('./routes/auth');      // Import auth routes

const app = express();                            // Create an express app
const port = process.env.PORT || 5000;            // Set the port

// Environment variables
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_cluster = process.env.MONGODB_CLUSTER;
const mongodb_database = process.env.MONGODB_DATABASE;
const node_session_secret = process.env.NODE_SESSION_SECRET;
const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;

const dbURI = process.env.DB_URI;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((err) => console.log(err));

// Routes
app.use('/api', authRoutes);

module.exports = app;