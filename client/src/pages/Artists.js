import React, { Component } from 'react';
import Slider from "../components/Slider";
import "../StyleSheets/slider.scss";
export default class Artists extends Component {
    render() {
        return (
            <div className="slider">
              <Slider />
            </div>
        )
    }
}
