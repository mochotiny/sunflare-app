import React, { Component } from "react";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userData: "", 
        };
      }
    componentDidMount(){
     fetch("http://localhost:5000/dashBoard", {
         method: "POST",
         crossDomain: true,
         headers: {
             'Content-Type': 'application/json',
             Accept: 'application/json',
             "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({
             token: window.localStorage.getItem("token"),
         }),
     })
     .then(res => res.json())
     .then(data => {
         console.log(data, "dashboard");
     })
   }
    render() {
    return (
      <div>
        <h1>DASHBOARD</h1>
      </div>
    )
    }
}