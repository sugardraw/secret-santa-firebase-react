import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      email: "",
      contribution: "5"
    };
  }

  getPersonalData = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = e => {
    e.preventDefault();
    const participant = {
      data: this.state
    };

    this.props.addNewParticipant(participant);

    e.currentTarget.reset();
    this.setState({
      name: "",
      surname: "",
      email: "",
      contribution: "5"
    });
  };

  renderMsg = () => (
    <ReactCSSTransitionGroup
      transitionName="messages"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
    >
      {this.props.succeed !== "" ? (
        <div className="card p-3 mt-4 bg-info rounded shadow">
          {this.props.succeed}
        </div>
      ) : null}
      {this.props.error !== "" ? (
        <div className="card p-3 mt-2 bg-info rounded shadow">
          {this.props.error}
        </div>
      ) : null}
    </ReactCSSTransitionGroup>
  );

  render() {
    return (
      <div className="form col-md-4 mt-5 ml-5">
        <div className="card p-4 rounded shadow">
          <div className="card-title text-center">
            <h3>Do you want to participate?</h3>
            <h6>we need at least <mark>five</mark> people...</h6>
          </div>
          <form onSubmit={this.submit}>
            <div className="row">
              <div className="col">
                <input
                  name="name"
                  onChange={this.getPersonalData}
                  type="text"
                  className="form-control mb-2"
                  placeholder="First name"
                />
                <input
                  name="surname"
                  onChange={this.getPersonalData}
                  type="text"
                  className="form-control mb-2"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  name="email"
                  onChange={this.getPersonalData}
                  type="email"
                  className="form-control mb-2"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="card-title text-center">
              <label className="p-2 pt-4 text-center" defaultValue>
                How much money do you want to aport?
              </label>
              <select
                name="contribution"
                onChange={this.getPersonalData}
                className="custom-select custom-select-lg mb-3"
                defaultValue="5"
              >
                <option value="5">5€</option>
                <option value="10">10€</option>
                <option value="15">15€</option>
              </select>
            </div>
            <input className="btn btn-info" type="submit" />
          </form>
          {this.renderMsg()}
        </div>
      </div>
    );
  }
}

export default Form;
