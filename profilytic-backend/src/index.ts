import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
 

import { connectToDatabase } from './clients/mongoClient';  // Import the database connection function
import { createTemporalClient } from './clients/temporalClient';
import { authMiddleware } from './middleware/authMiddleware';
import { userController } from './api/userController';
import { dashboardController } from './api/dashboardController'; 
import { companyController } from './api/companyController'; 
import { jobController } from './api/jobController'; 

// Uncomment as needed
// import { candidateController } from './api/candidateController';
// import { metricsController } from './api/metricsController';
// import { paymentController } from './api/paymentController';
// import { tokenController } from './api/tokenController';
// import { pricingController } from './api/pricingController';
// import { stripeWebhookController } from './api/stripeWebhookController';
// import { errorHandlingMiddleware } from './middleware/errorHandlingMiddleware';
// import { loggingMiddleware } from './middleware/loggingMiddleware';
// import { tokenValidationMiddleware } from './middleware/tokenValidationMiddleware';
// import { validateStripeSignatureMiddleware } from './middleware/validateStripeSignatureMiddleware';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

async function startServer() {
  try {
    // Initialize Temporal client
    await createTemporalClient();

    // Connect to the database
    await connectToDatabase();

    // Middleware
    app.use(bodyParser.json());
    app.use(cors());
    // app.use(loggingMiddleware); // Uncomment if needed
    app.use(authMiddleware); // Uncomment if needed
    // app.use(errorHandlingMiddleware); // Uncomment if needed
    // app.use(tokenValidationMiddleware); // Uncomment if needed
    // app.use(validateStripeSignatureMiddleware); // Uncomment if needed

    // Routes
    app.use('/api/users', userController);
    app.use('/api/dashboard', dashboardController); 
    app.use('/api/companies', companyController); 
    app.use('/api/jobs', jobController); 

    // Uncomment as needed
    // app.use('/api/candidates', candidateController);
    // app.use('/api/metrics', metricsController);
    // app.use('/api/payments', paymentController);
    // app.use('/api/tokens', tokenController);
    // app.use('/api/pricing', pricingController);
    // app.use('/api/stripe-webhook', stripeWebhookController);

    app.get('/', (req, res) => {
      res.send('Welcome to Profilytic Backend!');
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (err) {
    console.error('Server startup error:', err);
    process.exit(1);
  }
}

// Start the server
startServer().catch(err => {
  console.error('Server startup error:', err);
  process.exit(1);
});
