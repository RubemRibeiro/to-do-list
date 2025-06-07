import 'dotenv/config';

import app from './app.js';

const PORT = process.env.PORT || 3000;

// Ensure to import dotenv if you are using environment variables

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// This code imports the Express application from app.js and starts the server on port 3000.