import React, { Component } from 'react';
import Product from './product';
import SideBar from './sidebar';
import './style/home.css';
import Data from '../data/data.json';
import Dropdown from './dropdown';

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
          <Dropdown />
        </div> 
      </div>
    );
  }
} 

export default Home;
