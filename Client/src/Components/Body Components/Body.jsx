import React from 'react';
import CardComponent from './CardComponent';
import { useState } from 'react';
import axios from 'axios';

function Body() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  function handleEnterKey(e){
    if (e.key === 'Enter') {
      searchRecipes();
    }
  }

  const searchRecipes = async () => {
    console.log(`Searching for recipes with ${query}`);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/recipes/v2?query=${query}`
      );
      setRecipes(response.data.hits); // Edamam recipes
      console.log(response.data.hits); // Log the response data to see the structure
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };


  return (
    <>
    <div className="body flex justify-center items-center">
        <input type="text" placeholder="Search For Recipe i.e: Rice" value={query}
        className="m-3 border-gray-400 border rounded-3xl w-100 placeholder:pl-2" onChange={(e) => setQuery(e.target.value)} onKeyUp={handleEnterKey}/>
    </div>
    <div className="flex flex-wrap justify-center">
    {recipes.map((recipe, index) => (
          console.log(recipe.recipe),
          <CardComponent key={index} recipe={recipe.recipe} />
        ))}
      </div>
      </>
  );
}

export default Body;