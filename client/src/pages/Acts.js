import React, { Component } from "react";
import Card from "../components/Card";
import "../StyleSheets/acts.scss";
import "../StyleSheets/card.scss";
import { connect } from "react-redux";
import redCostume from "../images/redCostume.jpg";
import glitter from "../images/glitter.jpg";
import woman from "../images/woman.jpg";

export class Acts extends Component {
  render() {
    const imageList = [{ woman }, { glitter }, { redCostume }];

    return (
      <div className="acts--wrapper">
        <div className="acts--header">ACTS</div>

        <div className="acts--card_display">
          {this.props.acts.map((item, id) => (
            <Card key={id} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    acts: state.acts,
  };
};
export default connect(mapStateToProps)(Acts);
