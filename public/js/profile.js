const delRecipeHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/recipes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete recipe');
    }
  }
};

document.querySelector('.recipe-list').addEventListener('click', delRecipeHandler);
