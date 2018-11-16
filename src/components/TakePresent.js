import React, { Component } from "react";
import base from "../base";
import Friend from "./Friend";

class TakePresent extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: {}
    };
  }

  componentWillMount = () => {
    base
      .fetch("participantsObj", {
        context: this
      })
      .then(data => {

        
        this.setState({
          friendsList: data,

        });
      })
      .catch(error => {
        console.log(error, "this data could t be loaded");
      });
  };

  render() {
    console.log(this.state.friendsList)
    return (
      <div className="container">
        <Friend friendsList={this.state.friendsList} />
      </div>
    );
  }
}

export default TakePresent;
