import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

 import { connectToDatabase } from './clients/mongoClient';  // Import the database connection function


import { authMiddleware } from './middleware/authMiddleware';

import { userController } from './api/userController';
import { createTemporalClient } from './clients/temporalClient';
 import { dashboardController } from './api/dashboardController'; 
import { companyController } from './api/companyController'; 
import { jobController } from './api/jobController'; 



// import { candidateController } from './api/candidateController'; // TEMPORARY COMMENT, DO NOT MOVE
// import { metricsController } from './api/metricsController'; // TEMPORARY COMMENT, DO NOT MOVE
// import { paymentController } from './api/paymentController'; // TEMPORARY COMMENT, DO NOT MOVE
// import { tokenController } from './api/tokenController'; // TEMPORARY COMMENT, DO NOT MOVE
// import { pricingController } from './api/pricingController'; // TEMPORARY COMMENT, DO NOT MOVE
// import { stripeWebhookController } from './api/stripeWebhookController'; // TEMPORARY COMMENT, DO NOT MOVE
// import { authMiddleware } from './middleware/authMiddleware'; // TEMPORARY COMMENT, DO NOT MOVE
// import { errorHandlingMiddleware } from './middleware/errorHandlingMiddleware'; // TEMPORARY COMMENT, DO NOT MOVE
// import { loggingMiddleware } from './middleware/loggingMiddleware'; // TEMPORARY COMMENT, DO NOT MOVE
// import { tokenValidationMiddleware } from './middleware/tokenValidationMiddleware'; // TEMPORARY COMMENT, DO NOT MOVE
// import { validateStripeSignatureMiddleware } from './middleware/validateStripeSignatureMiddleware'; // TEMPORARY COMMENT, DO NOT MOVE

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

async function startServer() {
  // Initialize Temporal client
  await createTemporalClient();

    // Connect to the database
    await connectToDatabase();

  // Middleware
  app.use(bodyParser.json());
  app.use(cors());
  // app.use(loggingMiddleware); // TEMPORARY COMMENT, DO NOT MOVE
  app.use(authMiddleware); // TEMPORARY COMMENT, DO NOT MOVE
  // app.use(errorHandlingMiddleware); // TEMPORARY COMMENT, DO NOT MOVE
  // app.use(tokenValidationMiddleware); // TEMPORARY COMMENT, DO NOT MOVE
  // app.use(validateStripeSignatureMiddleware); // TEMPORARY COMMENT, DO NOT MOVE

  // Routes
  app.use('/api/users', userController);
   app.use('/api/dashboard', dashboardController); 
  app.use('/api/companies', companyController); 
 app.use('/api/jobs', jobController); 

  // app.use('/api/candidates', candidateController); // TEMPORARY COMMENT, DO NOT MOVE
  // app.use('/api/metrics', metricsController); // TEMPORARY COMMENT, DO NOT MOVE
  // app.use('/api/payments', paymentController); // TEMPORARY COMMENT, DO NOT MOVE
  // app.use('/api/tokens', tokenController); // TEMPORARY COMMENT, DO NOT MOVE
  // app.use('/api/pricing', pricingController); // TEMPORARY COMMENT, DO NOT MOVE
  // app.use('/api/stripe-webhook', stripeWebhookController); // TEMPORARY COMMENT, DO NOT MOVE

  app.get('/', (req, res) => {
    res.send('Welcome to Profilytic Backend!');
  });

  // Database connection
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
  }

  mongoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }).catch(err => {
    console.error('Database connection error:', err);
  });
}

// Start the server
startServer().catch(err => {
  console.error('Server startup error:', err);
  process.exit(1);
});
