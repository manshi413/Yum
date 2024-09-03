import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useResMenu = (ResId) => {
    const [ResInfo, setResInfo] = useState([]);
    //Fetch Data
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(MENU_API + ResId);
        const json = await data.json();
        setResInfo(json.data);
    };
    return ResInfo;
}

export default useResMenu;