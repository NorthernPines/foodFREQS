const searchHandler = async (event) => {
  event.preventDefault();
  
  const searchRecipes = document.querySelector('#search-recipes').value.trim();
  const searchQuery = 'q=' + searchRecipes;

  // THIS SHOULD BE WHERE THE API CALL GOES
  const appId = `app_id=81dae0b7`;
  const appKey = `app_key=348cf7bfd5457de6854604ca3dfe9fcd`;
  const baseQuery = 'https://api.edamam.com/api/recipes/v2?type=public';
  const apiReqStr = baseQuery + '&' + searchQuery + '&' + appId + '&' + appKey;

  if (searchRecipes) {
    // Send a GET request to the API endpoint
    const response = await fetch(apiReqStr);
    const recipes = await response.json();
    if (response.ok) {
      document.location.replace('/search');

      for (let i = 0; i < recipes.hits.length; i++) {
        const recipeResultItems = document.createElement("li");
        const recipeTitle = document.createElement("p");
        const recipeImage = document.createElement("img");
        const addRecipe = document.createElement("button");
        const recipeResults = document.querySelector("#recipe-results");
        recipeResults.appendChild(recipeResultItems);
        recipeTitle.setAttribute("class", "justify-space-between");
        recipeImage.setAttribute("src", `${recipes.hits[i].recipe.images.SMALL.url}`);
        recipeTitle.textContent = recipes.hits[i].recipe.label;
        addRecipe.textContent = "Add Recipe";
        recipeResultItems.appendChild(recipeTitle);
        recipeResultItems.appendChild(recipeImage);
        recipeResultItems.appendChild(addRecipe);
      }
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.new-recipe-form').addEventListener('submit', searchHandler);