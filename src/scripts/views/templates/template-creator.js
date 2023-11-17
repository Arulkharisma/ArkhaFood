import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="container">
  <div class="restaurant-content">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0">
    <div class="detail" tabindex="0">
        <p class="bold-text">${restaurant.name}</p>
        <p class="bold-text">${restaurant.address}</p>
        <p class="bold-text"><i class="bi bi-star-fill"></i> ${restaurant.rating}</p>
        <p class="bold-text">${restaurant.city}</p>
        <p>${restaurant.description}</p>
         <p class="bold-text" style="margin-top: 10px;">Category</p>
   <ul>
    <li>${restaurant.categories
    .map(
      (category) => `
        <span class="category">${category.name}, </span>
        `,
    )
    .join('')}
    </li>
  </ul>
    </div>
</div>
<div class="overview">

<h3 style="margin:50px auto 18px auto;">Menu</h3>

  <div class="menu-restaurant">
    <div class="food-menu" tabindex="0">
      <h4>Food</h4>
      <ul>
      ${restaurant.menus.foods
    .map(
      (food) => `
      <li>
        <p>${food.name}</p>
      </li>
    `,
    )
    .join('')}
    </ul>
    </div>

    <div class="drink-menu" tabindex="0">
    <h4>Drink</h4>
    <ul>
    ${restaurant.menus.drinks
    .map(
      (drink) => `
      <li>
          <p>${drink.name}</p>
      </li>
      `,
    )
    .join('')}
    </ul>
    </div>
</div>

<h3 style="margin: 45px 0px 18px 0px;">Reviews</h3>

<div class="detail-review">
    ${restaurant.customerReviews
    .slice(0, 3) // Menggunakan slice untuk mendapatkan tiga review pertama
    .map(
      (review) => `
        <div class="review-item" tabindex="0">
            <p class="bold-text">${review.name}</p>
            <p>${review.review}</p>
            <p class="review-date">${review.date}</p>
        </div>
      `,
    )
    .join('')}
</div>
</div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item" tabindex="0">
        <a href="#/detail/${restaurant.id}">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" width="220px" alt="${restaurant.name}">
            <div class="description">
                <p class="bold-text">${restaurant.name}</p>
                <p class="bold-text"><i class="bi bi-star-fill"></i> ${restaurant.rating}</p>
            </div>
            <p>${restaurant.city}</p>
            <p class="hidden-description">${restaurant.description}</p>
        </a>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
