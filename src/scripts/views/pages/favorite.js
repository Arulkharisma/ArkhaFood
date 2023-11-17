import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <nav id="navbar" class="second-navbar">
      <div class="nav-brand">
        <a href="/"><img src="./navbar-logo.png" alt=""><span>Arkha</span><span>Food</span></a>
      </div>
      <ul class="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
      </ul>
    </nav>
      <div class="container-restaurant">
          <h3 id="list-restaurant">Favorite Restaurant</h3>
          <div class="favorite-restaurant" id="favorite-restaurant">

          </div>
      </div>
    `;
  },

  async afterRender() {
    const FavoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#favorite-restaurant');
    FavoriteRestaurant.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const herosection = document.querySelector('.hero-section');
    herosection.style.display = 'none';
    const skipContent = document.querySelector('.skip-content');
    skipContent.style.display = 'none';
  },
};

export default Favorite;
