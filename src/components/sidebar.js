import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import './style/slider.css';

const SliderTip= createSliderWithTooltip(Slider);

class SliderBar extends Component {
  constructor(props){
    super ();
    this.state = {
      MaxMonthyPayment: 1000,
      MaxDownPayment: 3560,
    }
  }

  onMonthlyChange = (MaxMonthyPayment) =>{
    this.setState({MaxMonthyPayment});
  }

  onDownChange = (MaxDownPayment) => {
    this.setState({MaxDownPayment});
  }

  render() {
    return (
      <div className="col-lg-3">
      <label className="label-class">MAX MONTHLY PAYMENT <span className='slider1-vlaue'>${this.state.MaxMonthyPayment}</span> </label>
      <SliderTip 
        className= 'slider-class'
        defaultValue= {1000}
        min={10}
        max= {1000}
        value = {this.state.MaxMonthyPayment}
        onChange = {this.onMonthlyChange}
      />
      <label className="label-class">MAX DOWN PAYMENT <span className= 'slider2-vlaue'>${this.state.MaxDownPayment}</span></label>
      <SliderTip 
        defaultValue= {3560}
        min= {100}
        max= {3560}
        value= {this.state.MaxDownPayment}
        onChange = {this.onDownChange}
      />
      </div>
    );
  }
}

export default SliderBar;