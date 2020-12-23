import React from "react";
class Person extends React.Component {
  
constructor() {
    console.log("constructor()");
    super();
    this.state = {
        fullName:"Bechir Kamkoum",
        bio:"I'm a GoMyCode student",
        imgSrc:"téléchargement.jpg",
        profession:"Looking for a job",
        timer: 0,
        intervall: null
    };
    }

    componentDidMount() {
   
        this.setState({
          intervall: setInterval(
            () => this.setState({ timer: this.state.timer + 1 }),
            1000
          )
        });
      }
    
      
    
      componentWillUnmount() {
       
        clearInterval(this.state.intervall);
      }
    
    render() {

return (
    <div>
        <h1>FullName: {this.state.fullName}</h1>
        <p>{this.state.bio}</p>
        <img src={this.state.imgSrc} alt="profile" style={{width:400 , height:300}}/>
        <h1>Profession: {this.state.profession}</h1>
        <p>{this.state.timer}</p>
    </div>
    );
}
}
export default Person;