import React, { Component } from "react";
import "../StyleSheets/suggestion.scss";
import "../StyleSheets/global.scss";

export default class SuggestionBox extends Component {
  state = {
    value: "",
    errormessage: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for the suggestion!");
  };

  render() {
    return (
      <div className="suggestion--form">
        <form className="form--parts" onSubmit={this.handleSubmit}>
          <label for="ideas" className="form--header">Idea Box</label>
          <p className="form--text">
            Do you have ideas for a performance? We would love to hear from you.
          </p>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            name="idea"
            placeholder="Type away..."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
