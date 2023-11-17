import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    return response.json();
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
