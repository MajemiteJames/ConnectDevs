  const express = require('express');
  const connectDB = require('./config/db')

  const app = express();

  // Connecting Database
  connectDB();

  // Init Middleware
  app.use(express.json({ extended: false }));

  app.get('/',  (req, res) => res.send('API Runing'));

  // Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


  const PORT = process.env.PORT || 5000;

  
  app.all('*', (req, res) => res.status(404).json({
    status: 404,
    error: 'Endpoint does not exist',
  }));
  
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));