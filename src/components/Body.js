import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";






const Body = () => {

    const[searchText, setSearchText] = useState("");
    //Local State variable   -- Super Powerful variable
    const [ResList,setResList] = useState([]);
    const [FilterResList,setFilterResList] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49676121688314&lng=80.268790461123&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false){
        return(
            <div className="offline-error">
                <h1> Error - 404 </h1>
                <h2> Looks like You are Offline</h2>
            </div>
        )
    }
    // if(ResList == 0){  
    //     return <Shimmer/>;
    // }

    return ResList == 0 ? (
        <Shimmer/> ) : (
        <div className="body">
        <div className="filter flex">
            <div className="search m-4 p-4 ">
            <input 
            type="text" 
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}/>
            <button className="px-4 py-2 bg-green-200 m-4 rounded-lg"
            onClick={() => {
            const filteredRes = ResList.filter(
                (res) => res.info.name.toLowerCase().includes(searchText)
                );
                setFilterResList(filteredRes);
            console.log(searchText);
            }}
            >
                Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-200 rounded-lg" 
                    onClick={() => {
                                const filteredlist = ResList.filter(
                                    (res) => res.info.avgRating > 4.3
                                );
                                setFilterResList(filteredlist);
                                }}>
                Top-Rated Restaurants
            </button>
            </div>
            
        </div>
        <div className="flex flex-wrap"> 
        {FilterResList.map((rest) => (
            <Link
            className="link-res"
            key={rest.info.id} 
            to={"/restaurants/"+ rest.info.id}>
            <ResCard resData = {rest}/>
            </Link>
        ))}
        
        </div>
        </div>
    );
};

export default Body;