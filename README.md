# Profilytic.com MVP Architecture

## Overview
This README outlines the MVP (Model-View-Presenter) architecture for Profilytic.com, an AI-driven platform focusing on resume and job description parsing. The application leverages Next.js, Tailwind CSS for styling, Mongoose for MongoDB interactions, and Python for AI models, all containerized using Docker.

## MVP Architecture Components

### Frontend (View)
- **Next.js with Tailwind CSS**
  - User Interface built with React and styled using Tailwind CSS.
  - Pages:
    - Home: `http://profilytic.com/`
    - Dashboard: `http://profilytic.com/dashboard`
    - Login: `http://profilytic.com/login`
    - Join Waiting List: `http://profilytic.com/join-waiting-list`

### Backend (Presenter)
- **Next.js API Routes**
  - Serve as the Presenter in the MVP pattern, handling business logic.
  - Endpoints:
    - Authentication: `http://profilytic.com/api/auth`
    - Resume Parsing: `http://profilytic.com/api/resume`
    - Join Waiting List: `http://profilytic.com/api/join-waiting-list`
- **Node.js with Mongoose**
  - Server-side logic interacting with MongoDB.
  - Model management and data processing.

### AI-Driven Resume and Job Description Parsing (Model)
- **Python AI Models (e.g., GPT-3, OpenAI)**
  - Integrated within the backend for parsing and extracting key information.
  - Enables flexibility to switch to local AI models in the future.
  - Communication with Node.js backend for data processing.

### Data Storage and Management
- **MongoDB Database**
  - Hosted in a separate Docker container.
  - Stores user data, resumes, and parsing results.

### Containerization and Deployment
- **Docker and Docker Compose**
  - Two main containers: one for the Next.js application (including Node.js and Python) and another for MongoDB.
  - Simplifies development, deployment, and scaling.

### User Interaction and AI Functionality
- **Job and Description Creation**
  - Users can create job listings and detailed job descriptions directly on the platform.
- **Resume Upload and Batch Processing**
  - Enables users to upload individual or batch resumes for AI-driven parsing and analysis.
- **AI-Driven Shortlisting**
  - The AI system intelligently evaluates and shortlists the best candidates based on the criteria set in the job descriptions.
- **Job Page for Direct Resume Submission**
  - Employers can generate dedicated job pages where candidates can upload their resumes directly to Profilytic for processing and evaluation.

### Monitoring and Maintenance
- **Basic Monitoring Tools (e.g., Node.js monitoring tools)**
  - Ensures application performance and database health.

## Conclusion
The MVP architecture of Profilytic.com provides a robust foundation for an AI-driven resume parsing service, encapsulating frontend, backend, and AI functionalities within a scalable and maintainable framework. The platform streamlines the recruitment process with advanced AI capabilities, enabling efficient candidate evaluation and shortlisting.
