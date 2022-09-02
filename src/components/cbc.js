import React, { Component } from "react";

export default class Just extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: "thor",
      options: ["bhanu", "siri", "neha"],
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
  };

  render() {
    const { value, options } = this.state;
    return (
      <div className="text-center">
        <form onSubmit={this.onSubmit}>
          <h1>Current value is: {value} </h1>
          <label htmlFor="options">Pick an option:</label>{" "}
          <select id="options" value={value} onChange={this.onChange}>
            {options.map((val, ind) => (
              <option key={ind} value={val}>
                {val}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
