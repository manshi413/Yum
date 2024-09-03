import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count1: 0,
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://marketplace.canva.com/EAFowsrK6x8/1/0/1600w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-rYbQJ_qtaz8.jpg"
            },
        }
        
    }
    async componentDidMount() {
       
        const data = await fetch("https://api.github.com/users/Shuklaji1");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    };
    componentWillUnmount() {
        console.log("Unmounted");
    }


    render(){
        
        const{name, location, userhandle} = this.props;
        const{count, count1} = this.state;
        
        const handleclick = () => {
            return(
                this.setState(
                    {
                        count: this.state.count + 1,
                        count1: this.state.count1 + 2,
                    }
                )
            )
        }
        return(
            <div className="user-card">
                <button onClick={handleclick}><h1> Count = {count}</h1></button>
                <h1> Count_1 = {count1} </h1>
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: @{this.state.userInfo.twitter_username}</h4>
            </div>
        );
    }
}

export default UserClass;
