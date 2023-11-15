import CDN_URL from "../utils/config";
const ResturantCard = (props) => {
    const { resDetails } = props;
  
    const {cloudinaryImageId,name,cuisines,avgRating, costForTwo, deliveryTime } = resDetails?.info
    return (
      <div className="resturant-card">
        <img
          className="res-logo"
          alt="no logo found"
          src={CDN_URL + 
          cloudinaryImageId }
        ></img>
        <h3> {name} </h3>
        <h4> {cuisines.join(",")}</h4>
        <h4> {avgRating} stars</h4>
        <h4> {costForTwo}</h4>
        {/* <h4> {sla.deliveryTime} mints </h4> */}
      </div>
    );
  };

  export default ResturantCard 