import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {

  //Local State Variable - Super powerful Variable
  const [searchText, setSearchText] = useState("");

  //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rerendered")

  useEffect(() => {
    fetchData();
  }, [])
  const [listofdata, setListofdata] = useState([])
  const [filterlistofdata, setFilterlistofdata] = useState([])

  const fetchData = async () => {
    // const res = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',{

    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },

    // })
    // const json =await res.data
    const result = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await result.json()
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

    setListofdata(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilterlistofdata(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }

  //Conditional Rendering
  // if(listofdata.length === 0)
  // {
  //   return (
  //     <Shimmer />
  //   )
  // }


  return listofdata.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
          <button onClick={(e) => {
            e.preventDefault()
            console.log("hii " + searchText)
            console.log(listofdata)
            // console.log(listofdata[0].info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
            let arr=listofdata?.filter((result)=>result.info.name.toLowerCase().includes(searchText.toLowerCase()))
            console.log(arr)
            setFilterlistofdata(arr)
            // const filteredlist = listofdata.filter(
            //   // (rest)=>{rest.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())}
            // )
            // console.log(filteredlist)
            // const filteredlist = listofdata.filter((r) => { r.info.name.toLowerCase().includes(searchText.toLowerCase()) });
            // setListofdata(filteredlist)
          }}>Search</button>
        </div>
        <button className="filter-btn"
          onClick={() => {
            console.log("usestate called")
            setFilterlistofdata(listofdata.filter((res) => (res.info.avgRating >= 4.5)))
          }

          }
        >
          Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {/* {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))} */}
        {
          filterlistofdata.map((res, index) => <RestaurantCard key={index} resData={res.info} />)
        }
      </div>
    </div>
  );
};
export default Body