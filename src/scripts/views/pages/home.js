import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="container-restaurant">
          <h3 id="list-restaurant">Semua restaurant</h3>
          <div class="all-restaurant" id="all-restaurant">

          </div>
      </div>
    `;
  },

  async afterRender() {
    const listRestaurant = await RestaurantSource.restaurantList();
    const containerRestaurant = document.querySelector('.all-restaurant');
    listRestaurant.restaurants.forEach((restaurant) => {
      containerRestaurant.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    console.log(listRestaurant);
  },

};

export default Home;
