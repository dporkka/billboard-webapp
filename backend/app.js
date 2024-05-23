const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

// Create an Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Import routes
const authRouter = require('./routes/auth');
const billboardsRouter = require('./routes/billboards');
const campaignsRouter = require('./routes/campaigns');
const availabilityRouter = require('./routes/availability');
const impressionsRouter = require('./routes/impressions');
const notificationsRouter = require('./routes/notifications');
const supportMessagesRouter = require('./routes/supportMessages');
const teamsRouter = require('./routes/teams');

// Use routes
app.use('/auth', authRouter);
app.use('/billboards', billboardsRouter);
app.use('/campaigns', campaignsRouter);
app.use('/availability', availabilityRouter);
app.use('/impressions', impressionsRouter);
app.use('/notifications', notificationsRouter);
app.use('/support-messages', supportMessagesRouter);
app.use('/teams', teamsRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Billboard Web App');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
