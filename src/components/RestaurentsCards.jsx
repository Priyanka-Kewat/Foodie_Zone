import { restList } from "../util/mockData";
import { RESTAURANT_IMG } from "../util/constants";

const restaurantCardStyle = {
  width: "350px",
  backgroundColor: "#eae8e8",
  padding: "0.8rem",
  borderRadius: "1 rem",
  flexWrap: "wrap",
  marginTop: "10px",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  borderRadius: "20px",
};

const Restaurants_Cards = (props) => {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    props?.resObj?.info;
  return (
    <div style={restaurantCardStyle} className="containerBox">
      <div className="restaurant-images">
        <img
          alt="res-logo"
          height="100%"
          width="100%"
          src={RESTAURANT_IMG + cloudinaryImageId}
        />
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{avgRatingString} rating</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default Restaurants_Cards;
