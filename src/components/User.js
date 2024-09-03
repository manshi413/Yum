import { useEffect, useState } from "react";


const User = ({name, location, userhandle}) => {

    const [count, setcount] = useState(0);
    const [count1, setcount1] = useState(0);

    useEffect(() =>{
        //API Call
        const timer = setInterval(() => {
            console.log("namaste react op");
        }, 1000);
        return () => {
            clearInterval(timer);
        }

    }, []);

    
    const handleclick = () => {
        setcount(count + 1);
        setcount1(count1 + 2);
    } 
    return(
        <div className="user-card">
            <button onClick={handleclick} ><h1>Count = {count} </h1></button>
            <h1>Count-1 = {count1} </h1>
            <h2>Name: {name} </h2>
            <h3>Location: {location} </h3>
            <h4>Contact: {userhandle} </h4>
        </div>
    );
};

export default User;