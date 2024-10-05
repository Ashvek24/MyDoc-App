const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Add routes for your pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');  // Home page route
});

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');  // Main dashboard page
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');  // Register page
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');  // Login page
});

// Step 3: Add the route to serve patient.html
app.get('/patient', (req, res) => {
    res.sendFile(__dirname + '/public/patient.html');  // My Profile page
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main'); // Select the main element
    sidebar.classList.toggle('active');
    // Adjust the main margin based on sidebar state
    if (sidebar.classList.contains('active')) {
        main.style.marginLeft = '250px'; // Set margin when sidebar is active
    } else {
        main.style.marginLeft = '0'; // Reset margin when sidebar is inactive
    }
}
