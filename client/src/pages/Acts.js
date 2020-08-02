import React, { Component } from "react";
import Card from "../components/Card";
import "../StyleSheets/acts.scss";
import "../StyleSheets/card.scss";
import { connect } from "react-redux";


export class Acts extends Component {
  render() {
    
    return (
      <div className="acts--wrapper">
        <div className="acts--header">Acts</div>

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
