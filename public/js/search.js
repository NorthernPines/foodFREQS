require('dotenv').config(); 

// Set up API Query String
const baseURL = 'https://api.edamam.com/api/recipes/v2?type=public';
const searchRecipes = 'q=' + document.querySelector('#search-recipes').value.trim();
const appId = `app_id=${process.env.API_ID}`;
const appKey = `app_key=${process.env.API_KEY}`;
    
const queryArr = [baseURL, searchRecipes, appId, appKey];

// Final variable that includes API credentials and user search
const apiQuery = queryArr.join('&');

const searchHandler = async (event) => {
    event.preventDefault();

    // THIS SHOULD BE WHERE THE API CALL GOES

    if (searchRecipes) {
      // Send a GET request to the API endpoint
      const response = await fetch(apiQuery, {
        method: 'GET',
        body: JSON.stringify({ searchRecipes }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/search');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('#search-btn').addEventListener('submit', searchHandler);
  console.log(apiReqStr);