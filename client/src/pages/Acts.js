import React, { Component } from 'react';
import axios from "axios";

export default class Acts extends Component {
    state = {
        info: "",
        title: "",
        detail: "",
      };
    
      async componentDidMount() {
        const res = await axios.get("/acts");
        const allActs = await res.data;
        this.setState({
          info: allActs,
          title: allActs.map((item) => item.title),
          detail: allActs.map((item) => item.detail),
        });
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
