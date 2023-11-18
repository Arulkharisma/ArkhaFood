import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <nav id="navbar" class="second-navbar">
      <div class="nav-brand">
        <a href="/"><img src="./navbar-logo.png" alt=""><span>Arkha</span><span>Food</span></a>
      </div>
      <ul class="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/arulkharisma/">About Us</a></li>
      </ul>
    </nav>
    <h3 id="detail-restaurant">Detail</h3>
    <div id="restaurant-detail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
      // restaurant: {
      //   id: restaurant.id,
      //   title: restaurant.name,
      //   description: restaurant.description,
      //   rating: restaurant.rating,
      //   city: restaurant.city,
      //   picture: restaurant.pictureId,
      // },
    });

    const herosection = document.querySelector('.hero-section');
    herosection.style.display = 'none';
  },
};

export default Detail;
