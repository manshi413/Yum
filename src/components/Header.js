import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact,setbtnNameReact] = useState("Login");
    console.log("Header render");
    

    useEffect(() => {
        console.log("useEffect Called");
    },[btnNameReact])


    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 ">
            <div className="logo-container ">
                <Link to="/">
                <img className="w-55 h-20" src={LOGO_URL}></img>
                </Link>
            </div>
            <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
            <li className="px-4">  
                Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4"> 
            <Link className="link-res" to="/">Home
            </Link></li>
            <li className="px-4"> 
            <Link className="link-res" to="/about">About us
            </Link></li>
            <li className="px-4"> 
            <Link className="link-res" to="/contact-us">Contact us
            </Link></li>
            <li className="px-4">
                <Link className="link-res" to="/cart">Cart
            </Link></li>
            <li className="px-4">
                <Link className="link-res" to="/Grocery">Grocery
                </Link></li>
            <button className="login" onClick={ () => {
                btnNameReact == "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
            }}>{btnNameReact}</button>
        </ul>
            </div>
        </div>
    );
};

export default Header;