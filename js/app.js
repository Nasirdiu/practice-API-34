const buttonFood = () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  searchInput.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const cardSearch = document.getElementById("card");
  cardSearch.textContent='';
  meals.forEach((meal) => {
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `   <div onclick="loadPage('${
      meal.idMeal
    }')" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
      </div>
        
        `;
    cardSearch.appendChild(div);
  });
};
const loadPage = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => showLoad(data.meals[0]));
};

const showLoad = (showId) => {
  const show = document.getElementById("show");
  show.textContent='';
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${
    showId.strMealThumb
  }" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${showId.strMeal}</h5>
            <p class="card-text">
              ${showId.strInstructions.slice(0, 200)}
            </p>
            <a target='black' href="${
              showId.strYoutube
            }" class="btn btn-primary">Go somewhere</a>
          </div>
  `;

  show.appendChild(div);
};
