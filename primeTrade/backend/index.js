require('dotenv').config();          // load .env variables into process.env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');

const app = express();

app.use(cors());                     // allow requests from frontend
app.use(express.json());             // parse JSON body

app.use('/api/auth', authRoutes);    // auth routes namespace
app.use('/api/tasks', taskRoutes);   // tasks routes namespace

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});
