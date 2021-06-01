import React, { Component } from 'react'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        FullName: "Aida Brahim",
        Bio: "age 28",
        Profession: "JS Student",
        imgSrc: "/mypic.jpg",
      },
      show: false,
      time: 0,
    };
  }
  componentDidMount() {
    setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
  }
  render() {
    
    return (
      <div style={{textAlign:'center', margin:'50', backgroundColor:'grey', color:'white', fontSize:'50'}}>


        {this.state.show ? (
          <ul style={{listStyleType:'no-type'}}>
            <div>My Name is: {this.state.Person.FullName}</div>
            <div><img src={this.state.Person.imgSrc} alt="profile" height="350" ></img> </div>
            <div>My age is: {this.state.Person.Bio}</div>
            <div>and I am a {this.state.Person.Profession}</div>
            <div>The time you spent watching my profile is {this.state.time} seconds.</div>
          </ul>
          ) : null}

          <button style={{backgroundColor:'green'}}
            
            onClick={() => this.setState({ show: !this.state.show })}
          >
            Show/Hide
          </button>
          
      </div>
    )
  }
}
