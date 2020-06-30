const express = require('express');
const routes = require('./routes/routes');
const connnectDB = require('./util/db');
const cors = require('cors');

// Initialise server
const app = express();

// Accept only JSON data
app.use(express.json());

// Setup CORS
app.use(cors());

// Connect to databsase
connnectDB();

// Define routes
app.use('/', routes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
