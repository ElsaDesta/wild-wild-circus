import React, { Component } from "react";
import "../StyleSheets/global.scss";
import axios from "axios";

const mystle = { color: "white" };
export default class Admin extends Component {
  state = {
    title: "",
    detail: "",
    imagepath: "",
  };
  onChange = (e) => {
    switch (e.target.name) {
      case "imagepath":
        this.setState({ imagepath: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { title, detail, imagepath } = this.state;
    let formData = new FormData();

    formData.append("title", this.state.title);
    formData.append("detail", this.state.detail);
    formData.append("imagepath", this.state.imagepath);

    axios
      .post("/acts", formData)
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        <h1 style={mystle}>where is it</h1>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label style={mystle}>image</label>
            <input type="file" name="imagepath" onChange={this.onChange} />
            <label style={mystle}>title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <label style={mystle}>detail</label>
            <input
              type="text"
              name="detail"
              value={this.state.detail}
              onChange={this.onChange}
            />
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}
