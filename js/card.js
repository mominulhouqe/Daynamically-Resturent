



const loadMeals = (searchText)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals =>{

const mealContainer = document.getElementById('mealContainer');
mealContainer.innerHTML = '';
    meals.forEach(meal => {
 

        // step -2
        const mealDiv = document.createElement('div');
        // step -3 set child element
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          
            <button onclick="showDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meale-details">
 Details
</button>
          </div>
        </div>
      </div>
        
        `
        mealContainer.appendChild(mealDiv);
    })
}

const searchMeals = () =>{
    const searchButton = document.getElementById('search').value;
    loadMeals(searchButton)
    searchButton.value = ''
}

const showDetails = idMeal =>{
    const  url = ` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsId(data.meals[0]))

} 
const displayMealsId = meal =>{
    document.getElementById('meale-detailsLabel').innerText = `Name : ${meal.strMeal}`;
    const mealsDetails = document.getElementById('meals-details-body');
    mealsDetails.innerHTML = `
    <p class="btn btn-primary d-flex text-align-center justify-content-center">Area: ${meal.strArea} </p>

    <img  src="${meal.strMealThumb}" class="img-fluid card-img-top" alt="...">
    
    <p class="btn btn-primary mt-3 d-flex text-align-center justify-content-center">Category: ${meal.strCategory} </p>
    `

}



loadMeals('');