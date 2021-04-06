import { mocks, mockImages } from "./mock";
import camelize from "camelize";

<<<<<<< HEAD
export const restaurantsRequest = (location) => {
=======
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
>>>>>>> 70b7fe295b0d83ef22d115540138c3024d5a9604
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
<<<<<<< HEAD
      address: restaurant.vicinity,
=======
>>>>>>> 70b7fe295b0d83ef22d115540138c3024d5a9604
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
