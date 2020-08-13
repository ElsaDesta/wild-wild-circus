import React, { Component } from "react";
import "../StyleSheets/suggestion.scss";
import "../StyleSheets/global.scss";

export default class SuggestionBox extends Component {
  state = {
    value: "",
    flash: "",
    characterLimit: 1000,
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    const charCount = e.target.value.length;
    const charLeft = 1000 - charCount;
    this.setState({characterLimit: charLeft})


  };

  // handleCharacterLimit = (prevState) => {
  //   const { value } = this.state;
  //   this.setState({ characterLimit: prevState.characterLimit - value.length }, () => {
  //     console.log(this.state.characterLimit)
  //   });
  //   console.log(this.state.characterLimit);
  // };

  handleSubmit = (e) => {
e.preventDefault();
const {value} = this.state;
    value.length === 0
      ? this.setState({ flash: "Please write your idea before submitting" })
      : alert("Thanks for the suggestion!");
  };

  render() {
    return (
      <div className="suggestion--form">
        <form className="form--parts" onSubmit={this.handleSubmit}>
          <label for="ideas" className="form--header">
            Idea Box
          </label>
          <p className="form--text">
            Do you have ideas for a performance? We would love to hear from you.
          </p>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            name="idea"
            placeholder="Write your suggestion here..."
            maxLength="1000"
            type="text"
          />
          <p style={{color: "white"}}>{this.state.flash}</p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
