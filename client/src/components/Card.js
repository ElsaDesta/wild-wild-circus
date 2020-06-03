import React, { Component } from 'react';
import costume from  "../images/costume.jpg";
import "../StyleSheets/card.scss";

export default class Card extends Component {
    render() {
        return (
            <div className="card--wrapper">
           
               <div className="card--image_container">
               <img className="costume" src={costume}alt="a person dressed in costume" />
                </div>
          
                <div className="card--text">
                    <h3>Costume Play</h3>
                    <p>Playful colors</p>
                    <p>Get tickets</p>
                </div>
                
            </div>
        )
    }
}
