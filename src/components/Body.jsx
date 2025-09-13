import { restList } from "../util/mockData";
import Restaurants_Cards from "./RestaurentsCards";
import { useState, useEffect } from "react";

const RestaurantsHome = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const HigherRatingRestaurant = () => {
    console.log("button clicked");

    const filteredRestaurants = listOfRestaurants?.filter(
      (resturant) => resturant?.info?.avgRating > 4.2
    );
    console.log(filteredRestaurants);
    setListOfRestaurants(filteredRestaurants);
  };

  const PureVeg = () => {
    console.log("veg opt");

    const filterdVeg = listOfRestaurants?.filter(
      (vegies) => vegies?.info?.veg === true
    );
    setListOfRestaurants(filterdVeg);
  };

  const ChineseFood = () => {
    console.log("filter chinese");

    const filteredChinese = listOfRestaurants?.filter((Chine) =>
      Chine?.info?.cuisines.includes("Chinese")
    );

    setListOfRestaurants(filteredChinese);
  };

  const HydBiryani = () => {
    console.log("Filter biryani");
    const filteredBiryani = listOfRestaurants?.filter((biryani) =>
      biryani?.info?.cuisines.includes("Biryani")
    );
    setListOfRestaurants(filteredBiryani);
  };

  const RestCards_Home_Api =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.433546&lng=78.41905729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const getRestaurantsData = async () => {
    const data = await fetch(RestCards_Home_Api);
    const json = await data.json();

    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
  };

  useEffect(() => {
    console.log("Hello useEffect executed.");
    getRestaurantsData();
  }, []);

  return (
    <div>
      <div className="Filters-Box">
        <h2 className="fil-labels">
          Restaurants with online food delivery in Hyderabad
        </h2>
        <div>
          <button onClick={HigherRatingRestaurant} className="Filter-Rating">
            Higher Restaurant Rating
          </button>
          <button onClick={PureVeg} className="Filter-Veg">
            Veg
          </button>
          <button onClick={ChineseFood} className="Filter-Chinese">
            Chinese
          </button>
          <button onClick={HydBiryani} className="Filter-Biryani">
            Hyderabadi Biryani
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants?.map((restaurant, idx) => (
          <Restaurants_Cards key={restaurant?.info?.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsHome;
