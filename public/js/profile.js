const newRecipeHandler = async (event) => {
  event.preventDefault();

  const recipeName = document.querySelector('#recipe-name').value.trim();
  const ingredientName = document.querySelector('#ingredient-name').value.trim();
  const ingredientQty = document.querySelector('#ingredient-qty').value.trim();
  const ingredientUnit = document.querySelector('#ingredient-unit').value.trim();
  const instructions = document.querySelector('#instructions').value.trim();

  if (recipeName && ingredientName && ingredientQty && ingredientUnit && instructions) {
    // WAIT FOR TRAVIS TO EDIT THIS ROUTE
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      // WAIT FOR BRIAN TO EDIT THIS MODEL
      body: JSON.stringify({ recipeName, ingredientName, ingredientQty, ingredientUnit, instructions }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to upload recipe');
    }
  }
};

const delRecipeHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
// WAIT FOR TRAVIS TO EDIT THIS ROUTE
    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document.querySelector('.new-recipe-form').addEventListener('submit', newRecipeHandler);

// document.querySelector('.recipe-list').addEventListener('click', delRecipeHandler);
