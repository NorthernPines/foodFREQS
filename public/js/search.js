const searchHandler = async (event) => {
    event.preventDefault();
  
    const searchRecipes = document.querySelector('#search-recipes').value.trim();

    // THIS SHOULD BE WHERE THE API CALL GOES
  
    if (searchRecipes) {
      // Send a GET request to the API endpoint
      const response = await fetch('/api/recipes', {
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