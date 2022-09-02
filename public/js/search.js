const searchHandler = async (event) => {
  event.preventDefault();

  const searchRecipes = document.querySelector('#search-recipes').value.trim();
  const searchQuery = 'q=' + searchRecipes;

  // THIS SHOULD BE WHERE THE API CALL GOES
  const appId = `app_id=c91c5e97`;
  const appKey = `app_key=5691538e0a506e104674b0f9cc8cac94`;
  const baseQuery = 'https://api.edamam.com/api/recipes/v2?type=public';
  const apiReqStr = baseQuery + '&' + searchQuery + '&' + appId + '&' + appKey;

  if (searchRecipes) {
    // Send a GET request to the API endpoint
    const response = await fetch(apiReqStr);
    const recipes = await response.json();
    if (response.ok) {
      const recipeResults = document.querySelector("#recipe-results");
      const recipeResultsCont = document.createElement("div");
      const recipeResultsRow = document.createElement("div");
      recipeResultsCont.setAttribute("class", "container display-flex");
      recipeResultsRow.setAttribute("class", "row");

      for (let i = 0; i < recipes.hits.length; i++) {
        const recipeResultItems = document.createElement("div");
        const recipeImage = document.createElement("img");
        const recipeCardBody = document.createElement("div");
        const recipeTitle = document.createElement("h4");
        const recipeIngredients = document.createElement("p");
        const recipeHealth = document.createElement("p");
        const addRecipe = document.createElement("button");
        recipeResultItems.setAttribute("class", "card col-5 mx-2");
        recipeResultItems.setAttribute("style", "width: 18rem;");
        recipeTitle.setAttribute("class", "card-title");
        recipeImage.setAttribute("src", `${recipes.hits[i].recipe.images.SMALL.url}`);
        recipeImage.setAttribute("class", "card-img-top");
        recipeImage.setAttribute("alt", "Recipe Image");
        recipeCardBody.setAttribute("class", "card-body");
        recipeTitle.textContent = recipes.hits[i].recipe.label;
        recipeHealth.textContent = recipes.hits[i].recipe.healthLabels;
        recipeIngredients.textContent = recipes.hits[i].recipe.ingredientLines;
        addRecipe.textContent = "Add Recipe";
        recipeResultsRow.appendChild(recipeResultItems);
        recipeResultItems.appendChild(recipeImage);
        recipeResultItems.appendChild(recipeCardBody);
        recipeCardBody.appendChild(recipeTitle);
        recipeCardBody.appendChild(recipeIngredients);
        recipeCardBody.appendChild(recipeHealth);
        recipeCardBody.appendChild(addRecipe);
      }

      recipeResults.appendChild(recipeResultsCont)
      recipeResultsCont.appendChild(recipeResultsRow);



      recipeResults.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const element = e.target;
        if (element.matches('button')) {
          const addedRecipe = {
            name: element.parentElement.children[0].textContent,
            img_url: element.parentElement.parentElement.children[0].getAttribute("src"),
            health_labels: element.parentElement.children[2].textContent,
            ingredient_lines: element.parentElement.children[1].textContent
          }
          console.log(addedRecipe);
          fetch(`/api/recipes`, {
            method: 'POST',
            body: JSON.stringify(addedRecipe),
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then((response) => {
              console.log(response)
              alert('This recipe has been added to your FREQS!')
            })
            .catch((err) => console.log(err))
        }
      });
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.new-recipe-form').addEventListener('submit', searchHandler);