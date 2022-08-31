require('dotenv').config();

const searchHandler = async (event) => {
    event.preventDefault();
  
    const searchRecipes = 'q=' + document.querySelector('#search-recipes').value.trim();

    // THIS SHOULD BE WHERE THE API CALL GOES
    const appId = '${process.env.API_ID}';
    const appKey = '${process.env.API_KEY}';
    const baseQuery = 'https://api.edamam.com/api/recipes/v2?type=public';
    const apiReqStr = baseQuery + appId + appKey + searchRecipes;

    console.log(apiReqStr);

  
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