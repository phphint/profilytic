Profilytic Infrastructure
│
├── Backend Service (backend.proflytic.com)
│   ├── Handles user authentication, resume uploads, and initial processing requests
│   ├── Communicates directly with Temporal Cloud to manage workflows
│   └── Uses MongoDB Atlas for data storage
│
├── Temporal Cloud
│   ├── Orchestrates and manages complex resume processing workflows
│   └── Provides robust error handling and retry mechanisms
│
├── MongoDB Atlas
│   └── Stores all user information, resume data, and processing results
│
├── Digital Ocean Spaces
│   └── Stores resumes securely in the cloud
│
└── Real-time Status Updates
    └── Implemented via WebSockets or SSE to provide live processing updates to users
