import React, { Component } from 'react';
import './style/product.css';
import './style/home.css';
import Data from '../data/data.json';
import Dropdown from './dropdown';
import './style/slider.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';

export const myData5 = JSON.parse(JSON.stringify(Data.autos));

const SliderTip= createSliderWithTooltip(Slider);

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      Data: Data,
      MaxMonthyPayment: 300,
      MaxDownPayment: 4500,
      // OnfilterMaxDown :  thisOnfilterMaxDown()
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
    return (myData5.filter(function(item){
      for(let i = 0 ; i<myData5.length; i++){
        return (Math.floor(item.partnerPrequalification.emi) <= this.state.MaxMonthyPayment);         
      }
  },this)
  );
  }

  OnfilterMaxDown = () => {
    // eslint-disable-next-line
    return (myData5.filter(function(item){
      for(let i = 0 ; i<myData5.length; i++){
        return (Math.floor(item.partnerPrequalification.maximumDownPayment) === this.state.MaxDownPayment);         
      }
  },this)
  );
  }
  
  // intersection = () => {
  //   return (
  //     this.filterMaxMonthly().filter(function(n) {
  //       return this.OnfilterMaxMonthly().indexOf(n) > -1;
  //     })
  //   );
  // }

  // filteredResult = () => {
  //   return(
  //     this.OnfilterMaxMonthly().filter(function(n) {
  //       return (this.OnfilterMaxDown().indexOf(n) > -1)
  //     })
  //   );
  // }


  render() {
    // const MAxMonthyl = this.OnfilterMaxMonthly();
    // const MaxDown = this.OnfilterMaxMonthly();

    //  const filteredResult = () =>  MaxDown.filter(function(n) {
    //   return MAxMonthyl.indexOf(n) > -1;
    // })

  // console.log(filteredResult());

    return (
      <div className='home-class'>
        <div className="slider-col">
          <div className="col-lg-3">
          <label className="label-class">MAX MONTHLY PAYMENT <span className='slider1-vlaue'>${this.state.MaxMonthyPayment}</span> </label>
            <SliderTip 
              className= 'slider-class'
              defaultValue= {300}
              min={10}
              max= {300}
              value = {this.state.MaxMonthyPayment}
              onChange = {this.onMonthlyChange}
            />
            {/* <label className="label-class">MAX DOWN PAYMENT <span className= 'slider2-vlaue'>${this.state.MaxDownPayment}</span></label> */}
            {/* <SliderTip 
              defaultValue= {4500}
              min= {100}
              max= {4500}
              value= {this.state.MaxDownPayment}
              onChange = {this.onDownChange}
            /> */}
            </div>
            </div>
            <div className="product-col">
              <Dropdown 
                OnfilterMaxMonthly = {this.OnfilterMaxMonthly}
                // OnfilterMaxDown = {this.OnfilterMaxDown}
                // filteredResult = {filteredResult}
              />
        </div> 
      </div>
    );
  }
} 

export default Home;
