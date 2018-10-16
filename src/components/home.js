import React, { Component } from 'react';
import Product from './product';
import SideBar from './sidebar';
import './style/home.css';
import Dropdown from './dropdown';
import Data from '../data/data.json';

const myData = Data.autos;
var stringJSON = JSON.stringify(myData);
var objsJSON = JSON.parse(stringJSON);
class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      Data: Data
    }
  }

  render() {
    return (
      <div className='home-class'>
        <div className="slider-col">
          <SideBar />
        </div>
        <div className="product-col">
          <Product 
            Data = {this.state.Data}
            sortBy= {this.sortBy}
          />
        </div> 
      </div>
    );
  }
} 

export default Home;
