import React, { Component } from 'react';
import axios from "axios";
import Card from "../components/Card";
import "../StyleSheets/acts.scss";
import "../StyleSheets/card.scss";

export default class Acts extends Component {
    state = {
        info: "",
        title: "",
        detail: "",
      };
    
    //   async componentDidMount() {
    //     const res = await axios.get("/acts");
    //     const allActs = await res.data;
    //     this.setState({
    //       info: allActs,
    //       title: allActs.map((item) => item.title),
    //       detail: allActs.map((item) => item.detail),
    //     });
    //   }
    render() {
        return (
            <div className="acts--wrapper">
                <div className="acts--header">ACTS</div>
                <div className="acts--card_display"> <Card />  </div>
                
            </div>
        )
    }
}
