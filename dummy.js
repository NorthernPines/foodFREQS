require('dotenv').config();

// const searchRecipes = document.querySelector('#search-recipes').value.trim();
const searchQuery = 'q=' + 'egregergeiogheroituhjrsuoth';

// THIS SHOULD BE WHERE THE API CALL GOES
const appId = `app_Id=${process.env.API_ID}`;
const appKey = `app_key=${process.env.API_KEY}`;
const baseQuery = 'https://api.edamam.com/api/recipes/v2?type=public';
const apiReqStr = baseQuery + '&' + appId + '&' + appKey + '&' + searchQuery;
console.log(apiReqStr);