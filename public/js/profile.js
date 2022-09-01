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

document.querySelector('.recipe-list').addEventListener('click', delRecipeHandler);
