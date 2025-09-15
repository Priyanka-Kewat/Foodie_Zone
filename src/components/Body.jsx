// import { restList } from "../util/mockData";
import Restaurants_Cards from "./RestaurentsCards";
import { useState, useEffect } from "react";
import RestaurantsSkeletons from "./CardsSkeleton";
import { RestCards_Home_Api } from "../util/constants";

const RestaurantsHome = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterRestaurant, setFilterRestaurant] = useState();
  const [searchText, setSearchText] = useState("");

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

  const getRestaurantsData = async () => {
    try {
      setLoading(true);
      const data = await fetch(RestCards_Home_Api);
      const json = await data.json();

      const restaurants = json?.data?.cards?.find(
        (item) => item?.card?.card?.id === "restaurant_grid_listing_v2"
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurants);
      setFilterRestaurant(restaurants);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Hello useEffect executed.");
    getRestaurantsData();
  }, []);

  const searchRestaurant = () => {
    const filteredRest = listOfRestaurants?.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    setFilterRestaurant(filteredRest);
  };
  return (
    <>
      {loading ? (
        <div className="restaurant-skelton-body">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item) => (
            <RestaurantsSkeletons key={item} />
          ))}
        </div>
      ) : (
        <div>
          <div className="Filters-Box">
            <h2 className="fil-labels">
              Restaurants with online food delivery in Hyderabad
            </h2>
            <div>
              <input
                type="text"
                className="Search-ipnut"
                placeholder="Search Restaurents"
                value={searchText}
                onChange={(e) => {
                  console.log(e);
                  setSearchText(e?.target?.value);
                }}
              />
              <button className="Search-btn" onClick={searchRestaurant}>
                Search
              </button>
              <button
                onClick={HigherRatingRestaurant}
                className="Filter-Rating"
              >
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
            {filterRestaurant?.map((restaurant, idx) => (
              <Restaurants_Cards
                key={restaurant?.info?.id}
                resObj={restaurant}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantsHome;
