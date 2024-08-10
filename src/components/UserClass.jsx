import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props)
    console.log(this.props.name, "contructor");

    this.state = {
        count: 0,
        userinfo: {
            name: "dummy",
            location: "patiyali",
            email: "amsams@gmail.com"
        }
    }
    this.increaseCounter = this.increaseCounter.bind(this);
}

increaseCounter() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }


async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Abhinav-mishra123");
    const response = await data.json();
    
    this.setState({
        userinfo:response
    })
}
componentDidUpdate(){
    console.log("componentDiupdate called");
}



    render(){
        console.log(this.props.name , "render");
        const {name, location, bio, avatar_url} = this.state.userinfo
        const { count } = this.state; 
        return (
            <>
            <div className="contact-us">
                <h1>Name: {name}</h1>
                <img src={avatar_url}/>
                <h2>Location: {location}</h2>
                <p>Bio: {bio}</p>
                <p>Count: {count}</p>
                <button onClick={this.increaseCounter}>Increase Counter</button>
            </div>
            
            </>
        )
    }
}

export default UserClass;