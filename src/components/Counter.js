import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from "react-router-dom";

class Counter extends React.Component {
  takeYourPresent = e => {
    console.log("hallo, i m clicked");
  };

  render() {
    return (
      <div>
        <div className="position-absolute badge badge-pill badge-success shadow-lg p-4 ml-5">
          <h2>{this.props.participantsCount}</h2>
          <hr />
          <h6>
            Friends are taking part <br />
            at this moment
          </h6>
          <hr />
          <ReactCSSTransitionGroup
            transitionName="takepresent"
            transitionAppear={true}
            transitionAppearTimeout={2500}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={2500}
          >
            {this.props.participantsCount >= 5 && (
              <div className="p-5 text-warning ">
                <h5>NOW</h5>
                <br />
                you can make a present!{" "}
                <Link to="/take-your-present" onClick={this.hello}>
                  {" "}
                  <span
                    onClick={this.takeYourPresent}
                    className="p-2 m-2 bg-light"
                  >
                    &#9655;
                  </span>{" "}
                </Link>
              </div>
            )}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Counter;
