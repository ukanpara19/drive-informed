import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Data from '../data/data.json';
import Sorting from './sorting';
import Header from './header';
import './style/product.css';
import './style/home.css';
import './style/slider.css';

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

  onDownChange = (MaxDownPayment) =>{
    this.setState({MaxDownPayment});
  }

  OnfilterMaxMonthly = () =>{
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
            <Sorting
              OnfilterMaxMonthly = {this.OnfilterMaxMonthly}
            />
      </div> 
    </div>
    );
  }
} 

Home.propTypes = {
  OnmonthlySortASC : PropTypes.func.isRequired,
  OnmonthlySortDSC: PropTypes.func.isRequired,
  OnfilterMaxMonthly: PropTypes.func.isRequired
  };

export default Home;
