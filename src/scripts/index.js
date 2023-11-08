import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import DATA from '../public/data/DATA.json'

document.querySelector('.burger-menu').addEventListener('click', function () {
    document.querySelector('.nav-list').classList.toggle('list-menu-mobile');
});

document.querySelectorAll('a, button, input').forEach(e => {
  if (e.offsetWidth < 44 || e.offsetHeight < 44) {
    console.log(e)
  }
});

function allRestaurant(data) {
    let restaurantItem = '';

    data.restaurants.forEach((restaurant) => {
        restaurantItem += `
      <div class="restaurant-item" tabindex="0">
            <img tabindex="0" src="${restaurant.pictureId}" width="220px" alt="${restaurant.name}">
            <div class="description" tabindex="0">
              <p class="bold-text">${restaurant.name}</p>
              <p class="bold-text"><i class="bi bi-star-fill"></i> ${restaurant.rating}</p>
            </div>
            <p tabindex="0">${restaurant.city}</p>
            <p class="hidden-description" tabindex="0">${restaurant.description}</p>
          </div>
      `;
    });
    document.getElementById('all-restaurant').innerHTML = restaurantItem;
}

allRestaurant(DATA);