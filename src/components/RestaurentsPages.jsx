import { useEffect, useState } from "react";

const RestaurantsPages = () => {
  const Restaurents_APIs =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.433546&lng=78.41905729999999&restaurantId=377795&catalog_qa=undefined&submitAction=ENTER";

  const [restaurantsData, setRestaurantsData] = useState([]);
  const getRestaurantsData = async (restaurantId = "") => {
    const response = await fetch(Restaurents_APIs);
    const json = await response.json();
    const recommendedRes =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
        ?.card?.itemCards;
    setRestaurantsData(recommendedRes);
    console.log("data loaded");
  };

  useEffect(() => {
    getRestaurantsData();
  }, []);

  return <div>Big bowl pages</div>;
};

export default RestaurantsPages;
