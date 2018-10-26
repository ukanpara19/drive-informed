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
      year: 2018
    }
  }

  onMonthlyChange = (MaxMonthyPayment) =>{
    this.setState({MaxMonthyPayment});
  }

  onYearChange = (year) =>{
    this.setState({year});
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

  onFilterYearly = () => {
    const maxMonthlyFilterdata = this.OnfilterMaxMonthly();
    // eslint-disable-next-line
    return(maxMonthlyFilterdata.filter(function(item){
        for(let i = 0 ; i<maxMonthlyFilterdata.length; i++){
          return (Math.floor(item.year) <= this.state.year)
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
            <label className="label-class">YEAR <span className='slider2-vlaue'>{this.state.year}</span> </label>
            <SliderTip 
              className= 'slider-class'
              min={2000}
              max= {2018}
              value = {this.state.year}
              onChange = {this.onYearChange}
            />
          </div>
          </div>
          <div className="product-col">
            <Sorting
              OnfilterMaxMonthly = {this.OnfilterMaxMonthly}
              onFilterYearly = {this.onFilterYearly}
            />
      </div> 
    </div>
    );
  }
} 

Home.propTypes = {
  OnmonthlySortASC : PropTypes.func,
  OnmonthlySortDSC: PropTypes.func,
  OnfilterMaxMonthly: PropTypes.func
  };

export default Home;
