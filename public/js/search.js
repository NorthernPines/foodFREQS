require('dotenv').config();

const searchHandler = async (event) => {
  event.preventDefault();

  const searchRecipes = document.querySelector('#search-recipes').value.trim();
  const searchQuery = 'q=' + searchRecipes;

  // THIS SHOULD BE WHERE THE API CALL GOES
  const appId = `app_Id=${process.env.API_ID}`;
  const appKey = `app_key=${process.env.API_KEY}`;
  const baseQuery = 'https://api.edamam.com/api/recipes/v2?type=public';
  const apiReqStr = baseQuery + '&' + appId + '&' + appKey + '&' + searchQuery;

  if (searchRecipes) {
    // Send a GET request to the API endpoint
    const response = await fetch(apiReqStr, {
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