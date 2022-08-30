const searchHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const searchRecipes = document.querySelector('#search-recipes').value.trim();
  
    if (searchRecipes) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/recipes', {
        method: 'GET',
        body: JSON.stringify({ searchRecipes }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/search');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('#search-btn').addEventListener('submit', searchHandler);