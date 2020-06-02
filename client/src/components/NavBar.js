import React, { Component } from 'react';
import "../StyleSheets/global.scss";
import "../StyleSheets/navbar.scss";
import axios from "axios";

export default class NavBar extends Component {
    state = {
        info: "",
        title: "",
        detail: ""
    }

    
        async componentDidMount() {
            const res = await axios.get('/acts')
            const allActs = await res.data
            this.setState({info: allActs, title: allActs.map(item => item.title), detail: allActs.detail})
          }
    //    async fetchActs = () =>{
    //     try {
    //        //fetch data from url endpoint
    //        const response = await axios.get('/acts');
    //          return response.data;
             
          
    //     } catch (error) {
    //         console.log(error)
    //     }
       
        

    // }; 
        
       //axios.get('/acts').then((res) => console.log(res.data)).catch((err) => console.log(err))
       
   

    
    render() {
        const {acts} = this.state.info;
        return (
            <div>
               <h1>{this.state.title[0]}</h1>
            </div>
        )
    }
}
