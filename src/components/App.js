import React, { Component } from "react";
import Form from "./Form";
import "../css/styles.css";
import Counter from "./Counter";
import base from "../base";
import uuid from "uuid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      succeed: "",
      error: "",
      participants: [],
      participantsObj: {}
    };
  }




  componentDidMount() {
    this.ref = base.syncState(`participantsObj`, {
      context: this,
      state: "participantsObj"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addNewParticipant = participant => {
    if (
      this.state.participants.length > 0 &&
      (participant.data.email !== "" && participant.data.name !== "")
    ) {
      this.state.participants.forEach(element => {
        if (element.data.email === participant.data.email) {
          this.setState({
            error: `Sorry ${
              participant.data.name
            }, you can't participate twice!`
          });
          setTimeout(() => {
            this.setState({
              succeed: "",
              error: ""
            });
          }, 3000);
        } else {

          /**
           *we set a different id for every
           *participant and we in order to save it in firebase
           *
           */
          
          this.setState(state => {
            state.participantsObj[uuid()] = participant;
            state.succeed = `Congratulations ${
              participant.data.name
            }, you'll take part!`;
            state.error = "";
          });
          
          /**
           * i populate the array participants
           * in order to make the comparison work easier
           * 
           */

          this.state.participants.push(participant);

          setTimeout(() => {
            this.setState({
              succeed: ""
            });
          }, 3000);
        }
      });
      return;
    } else if (participant.data.name === "" && participant.data.email === "") {
      this.setState({
        error: `Sorry ${
          participant.data.name
        }, you have to give at least your name and email`
      });
    } else {

      if (this.state.participants.length >= 0) {
        this.setState(state => {
          state.participantsObj[uuid()] = participant;
          state.succeed = `Congratulations ${
            participant.data.name
          }, you'll take part!`;
          state.error = "";
        });
        this.state.participants.push(participant);

        setTimeout(() => {
          this.setState({
            succeed: ""
          });
        }, 3000);
      }
    }
  };

  render() {
    let count = Object.keys(this.state.participantsObj).length;


    return (
      <div>
        <Counter participantsCount={count}  />
        <Form
          addNewParticipant={this.addNewParticipant}
          succeed={this.state.succeed}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
