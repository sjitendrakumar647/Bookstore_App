import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express()
const port = process.env.PORT || 4000;
const dbURI = process.env.MongoDB_URI;
app.get('/', (req, res) => {
  res.send('Book store!')
})
//connect to MongoDB
try {
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
}catch (error) {
    console.error('Error connecting to MongoDB:', error);
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
