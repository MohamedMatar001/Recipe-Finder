const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Recipe API!');
});

app.get('/api/recipes/v2', async (req, res) => {
  const { query } = req.query;

  console.log("EDAMAM_APP_ID:", process.env.EDAMAM_APP_ID);
  console.log("EDAMAM_APP_KEY:", process.env.EDAMAM_APP_KEY);
  console.log("Query:", query);

  try {
    const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
      headers: {
        'Edamam-Account-User': process.env.EDAMAM_USER_ID // 
      },
      params: {
        type: 'public', // required for v2
        q: query,
        app_id: process.env.EDAMAM_APP_ID,
        app_key: process.env.EDAMAM_APP_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recipes:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch recipes', details: error?.response?.data });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
