const searchHandler = async (event) => {
    event.preventDefault();
  
    const searchRecipes = 'q=' + document.querySelector('#search-recipes').value.trim() + '&';

    // THIS SHOULD BE WHERE THE API CALL GOES
    const appId = 'app_Id=07b9c326&';
    const appKey = 'app_key=8a07a672f9443f536dcc7f067c0e06fb&';
    const baseQuery = 'https://api.edamam.com/api/recipes/v2?type=public&';
    const apiReqStr = searchRecipes + baseQuery + appId + appKey;
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
  console.log(apiReqStr);