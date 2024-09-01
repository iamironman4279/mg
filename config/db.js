const mongoose = require('mongoose');

// Directly specify the MongoDB URI
const mongoURI = 'mongodb+srv://hemanthawsrdj:Hemanth%404279@cluster0.1fkmk.mongodb.net/ride?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined');
    }

    // Connect to MongoDB using Mongoose
    await mongoose.connect(mongoURI, {
      // Use the recommended options
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

// Export connectDB function
module.exports = connectDB;
