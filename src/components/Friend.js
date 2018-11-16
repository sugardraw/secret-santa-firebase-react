import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Friend extends Component {
  constructor() {
    super();
    this.state = {
      nextFriend: "",
      endChristmas: false
    };
  }

  /**
   * the function count retrieve the total number
   * of images and compares it with the length of the 
   * participants array
   * 
   */


  count = () => {
    let images = document.querySelectorAll("img");
    console.log(Object.keys(this.props.friendsList).length, images.length);
    if (Object.keys(this.props.friendsList).length === images.length) {
      this.setState({
        endChristmas: true
      });
    }
  };

  receivePresent = e => {
    e.target.classList.add("bg-success");
    e.target.insertAdjacentHTML(
      "afterBegin",
      '<div className="present"><img width="40px" height="40px" src="./images/present.svg" alt="present" /> </div>'
    );

    this.setState({
      nextFriend: e.target.name
    });
    this.count();
  };

  chooseAFriend = () => {
    let randomId = Math.floor(
      Math.random() * Object.keys(this.props.friendsList).length
    );

    let friend = Object.values(this.props.friendsList).map((elem, i) => (
      <div key={i} className="card m-3 p-3 shadow">
        <h3 className="card-title">Hallo {elem.data.name},</h3>
        <div className="card-body">
          Which friend do you want to give a present?
          <br />
          Click on his/her name...
          <div className="mx-auto text-center m-3"> </div>
          <div>
            {Object.values(this.props.friendsList).map((item, i) => (
              <label key={i}>
                <button
                  data-id={i}
                  className={"btn btn-info p-2 m-1"}
                  onClick={this.receivePresent}
                  name={item.data.name}
                >
                  {item.data.name}
                </button>
              </label>
            ))}
          </div>
        </div>
      </div>
    ));

    return friend[randomId];
  };

  render() {
    if (this.state.endChristmas) {
      return (
        <div className="mx-auto text-center p-3 m-3">
        <ReactCSSTransitionGroup
            transitionName="takepresent"
            transitionAppear={true}
            transitionAppearTimeout={2500}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={2500}
          >
          <h1 className="text-center ">
            Merry Christmas! and see you next year
          </h1>
          </ReactCSSTransitionGroup>
        </div>
      );
    } else if (this.state.nextFriend) {
      return (
        <div className="mx-auto text-center p-3 m-3">
          <div className="card m-3 p-3 shadow">
            <h3 className="card-title">Hallo {this.state.nextFriend},</h3>
            <div className="card-body">
              Which friend do you want to give a present?
              <br />
              Click on his/her name...
              <div className="mx-auto text-center m-3"> </div>
              <div>
                {Object.values(this.props.friendsList).map((item, i) => (
                  <label key={i}>
                    <button
                      data-id={i}
                      className={"btn btn-info p-2 m-1"}
                      onClick={this.receivePresent}
                      name={item.data.name}
                    >
                      {item.data.name}
                    </button>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mx-auto text-center p-3 m-3">
          {this.chooseAFriend()}
        </div>
      );
    }
  }
}

export default Friend;
