const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3000;
require('dotenv').config();

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

console.log("EDAMAM_APP_ID:", process.env.EDAMAM_APP_ID);
console.log("EDAMAM_APP_KEY:", process.env.EDAMAM_APP_KEY);

// Basic route
app.get('/', (req, res) => {
    try{
        res.send("Hello From Server")
    }
    catch(err){
        console.log(err)
        res.status(500).send("Internal Server Error")
    };
});

app.get('/api/recipes/v2', async (req, res) => {
    const { q: query } = req.query; // Get search query from frontend
  
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`
      );
      res.json(response.data.hits); // Send recipes to frontend
    } catch (error) {
      console.error('Edamam API error:', error);
      res.status(500).json({ error: 'Failed to fetch recipes' });
    }
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});