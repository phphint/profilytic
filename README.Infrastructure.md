Profilytic Infrastructure
│
├── Next.js Backend (Handles Auth, State, Payment)
│   ├── User Authentication (Login/Signup)
│   ├── State Management
│   ├── Payment Handling (Stripe Integration)
│   ├── API Endpoints
│   │   └── Resume Management
│   │       ├── User Management
│   │       ├── Company & Job Management
│   │       ├── Resume Upload and Status Updates
│   │       └── Cron-based Node.js Backend
│   │           └── Resume Processing Scheduler
│   │               ├── Schedules and triggers serverless functions
│   │               └── Serverless Functions
│   │                   ├── PDF to Text Conversion (Serverless Function)
│   │                   └── Resume & Job Description Analysis (Serverless Function)
│   │                   └── Resume to json formated (Serverless Function)
│   └── WebSocket Integration (sockets.js)
│       ├── Real-time Notifications (Errors, Messages)
│       └── Bi-directional Communication
│
├── Unified Database (MongoDB Atlas Serverless)
│   ├── User Collection
│   ├── Company Collection
│   ├── Job Collection
│   ├── Resume Collection
│   ├── AIAnalysisResult Collection
│   ├── ProcessingQueue Collection
│   ├── TokenTransaction Collection
│   ├── AIInteraction Collection
│   └── ErrorLog Collection
│
└── Third-Party Services
    └── Stripe (Payment Processing)
