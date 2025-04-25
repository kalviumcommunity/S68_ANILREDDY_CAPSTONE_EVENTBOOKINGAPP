const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = require('./db');
const eventRoutes = require('./src/Routes/eventRoutes');


const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/events', eventRoutes);


app.listen(PORT, async() => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
