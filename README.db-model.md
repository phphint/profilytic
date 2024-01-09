{
  "User": {
    "email": "String",
    "password": "String",
    "tokensRemaining": "Number",
    "companyId": ["ObjectId"], // Array of company IDs
    "createdAt": "Date",
    "updatedAt": "Date"
  },
  "Company": {
    "name": "String",
    "industry": "String",
    "address": "String",
    "createdAt": "Date",
    "updatedAt": "Date"
  },
  "Job": {
    "userId": "ObjectId",
    "companyId": "ObjectId",
    "title": "String",
    "descriptionText": "String",
    "status": "String", // e.g., "open", "closed"
    "createdAt": "Date",
    "updatedAt": "Date"
  },
  "Resume": {
      ...
      "jsonContent": {
        "personalInfo": {
          "name": "String",
          "contactDetails": {
            "email": "String",
            "phone": "String",
            "address": "String",
            "linkedin": "String",
            "website": "String"
          },
          "objective": "String",
          "summary": "String"
        },
        "professionalExperience": [
          {
            "position": "String",
            "company": "String",
            "location": "String",
            "duration": {
              "start": "Date",
              "end": "Date"
            },
            "description": "String",
            "achievements": ["String"],
            "technologiesUsed": ["String"]
          }
        ],
        "education": [
          {
            "institution": "String",
            "degree": "String",
            "fieldOfStudy": "String",
            "year": "String",
            "gpa": "String",
            "honors": "String"
          }
        ],
        "skills": ["String"],
        "certifications": [
          {
            "name": "String",
            "issuer": "String",
            "dateObtained": "Date",
            "expiryDate": "Date"
          }
        ],
        "languages": [
          {
            "language": "String",
            "proficiency": "String"
          }
        ],
        "projects": [
          {
            "title": "String",
            "description": "String",
            "technologiesUsed": ["String"],
            "link": "String",
            "duration": {
              "start": "Date",
              "end": "Date"
            }
          }
        ],
        "publications": [
          {
            "title": "String",
            "publication": "String",
            "date": "Date",
            "link": "String"
          }
        ],
        "volunteerExperience": [
          {
            "role": "String",
            "organization": "String",
            "description": "String",
            "duration": {
              "start": "Date",
              "end": "Date"
            }
          }
        ],
        "honorsAndAwards": [
          {
            "title": "String",
            "issuer": "String",
            "date": "Date",
            "description": "String"
          }
        ],
        "additionalSections": {
          "hobbiesAndInterests": ["String"],
          "references": [
            {
              "name": "String",
              "contactDetails": "String",
              "relationship": "String"
            }
          ],
          // Other custom sections as required
        }
      },
      "status": "String", // e.g., "pending", "processed"
      "uploadDate": "Date",
      "analysisResultId": "ObjectId"
    },
  "AIAnalysisResult": {
    "resumeId": "ObjectId",
    "jobId": "ObjectId",
    "score": "Number",
    "insights": {
      "experience": "String",
      "education": "String",
      "skills": "String",
      "achievements": "String",
      "consistency": "String",
      "industryExperience": "String"
    },
    "createdAt": "Date"
  },
  "ProcessingQueue": {
    "resumeId": "ObjectId",
    "jobId": "ObjectId",
    "status": "String", // e.g., "queued", "processing", "completed"
    "queuedAt": "Date",
    "startedAt": "Date",
    "completedAt": "Date"
  },
  "TokenTransaction": {
    "userId": "ObjectId",
    "amount": "Number",
    "transactionDate": "Date",
    "stripeTransactionId": "String"
  },
  "AIInteraction": {
     "userId": "ObjectId",
     "jobId": "ObjectId", // Optional, if the interaction is related to a specific job
     "resumeId": "ObjectId", // Optional, if the interaction is related to a specific resume
     "query": "String",
     "response": "String",
     "createdAt": "Date"
   },
   "ErrorLog": {
     "userId": "ObjectId", // Optional, if the error is related to a specific user
     "jobId": "ObjectId", // Optional, if the error is related to a specific job
     "resumeId": "ObjectId", // Optional, if the error is related to a specific resume
     "processType": "String", // e.g., "ResumeProcessing", "AIAnalysis", etc.
     "errorDetails": "String", // Description of the error
     "errorCode": "String", // Optional, a code identifying the error type
     "timestamp": "Date", // When the error occurred
     "resolved": "Boolean", // Whether the error has been resolved
     "resolutionDetails": "String", // Details on how the error was resolved, if applicable
     "resolvedAt": "Date" // When the error was resolved, if applicable
   }
}


 


