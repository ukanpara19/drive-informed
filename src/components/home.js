import React, { Component } from 'react';
import './style/product.css';
import './style/home.css';
import Data from '../data/data.json';
import Dropdown from './dropdown';
import './style/slider.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Header from './header';

const SliderTip= createSliderWithTooltip(Slider);
const informedData = JSON.parse(JSON.stringify(Data.autos));

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      MaxMonthyPayment: 250,
    }
  }

  onMonthlyChange = (MaxMonthyPayment) =>{
    this.setState({MaxMonthyPayment});
  }

  onDownChange = (MaxDownPayment) => {
    this.setState({MaxDownPayment});
  }

  OnfilterMaxMonthly = () => {
    // eslint-disable-next-line
    return (informedData.filter(function(item){
      for(let i = 0 ; i<informedData.length; i++){
        return (Math.floor(item.partnerPrequalification.emi) <= this.state.MaxMonthyPayment);         
      }
  },this)
  );
  }

  render() {
    return (
      <div className='home-class'>
        <Header />
        <div className="slider-col">
          <div className="col-lg-3">
          <label className="label-class">MAX MONTHLY PAYMENT <span className='slider1-vlaue'>$ {this.state.MaxMonthyPayment}</span> </label>
            <SliderTip 
              className= 'slider-class'
              min={10}
              max= {250}
              value = {this.state.MaxMonthyPayment}
              onChange = {this.onMonthlyChange}
            />
            </div>
            </div>
            <div className="product-col">
              <Dropdown 
                OnfilterMaxMonthly = {this.OnfilterMaxMonthly}
              />
        </div> 
      </div>
    );
  }
} 

export default Home;
