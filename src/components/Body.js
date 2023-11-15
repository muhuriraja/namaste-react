import ResturantCard from "./ResCard";
import { ResDataList } from "../utils/mockData";

export const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="resturant-container">
          {
            ResDataList.map((resturants)=>
              <ResturantCard key = {resturants.info.id} resDetails= {resturants} />
  
            )
          }
          
        </div>
      </div>
    );
  };