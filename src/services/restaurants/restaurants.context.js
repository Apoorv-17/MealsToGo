<<<<<<< HEAD
import React, { useState, useContext, createContext, useEffect } from "react";
=======
import React, { useState, createContext, useEffect, useMemo } from "react";
>>>>>>> 70b7fe295b0d83ef22d115540138c3024d5a9604

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

<<<<<<< HEAD
import { LocationContext } from "../location/location.context";

=======
>>>>>>> 70b7fe295b0d83ef22d115540138c3024d5a9604
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
<<<<<<< HEAD
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
=======

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
>>>>>>> 70b7fe295b0d83ef22d115540138c3024d5a9604
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
<<<<<<< HEAD
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
=======
    retrieveRestaurants();
  }, []);
>>>>>>> 70b7fe295b0d83ef22d115540138c3024d5a9604

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
