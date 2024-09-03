import User from "./User";
import UserClass from "./UserClass";
import React, {Component} from "react";
class About extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount() {
        
     }
    render(){
        
    return (
        <div className="about">
            <h1>About</h1>
            <h2>This is Namaste React done by Brishi Shukla</h2>
            <User name={"Brijesh Shukla"} location= {"Kanpur"} userhandle= {"@brijeshshukla"}/>
            <UserClass name= {"Brishi Shukla"} location ={"Bengaluru"} userhandle={"@brishishukla"}/>
        </div>
        );
    };
};

export default About;