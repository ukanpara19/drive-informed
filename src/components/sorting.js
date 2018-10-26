import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/dropdown.css';
import Product from './product';

class Dropdown extends Component {
      
      OnmonthlysortASCClick = () => {
        let maxMonthly  = this.props.onFilterYearly()
        // eslint-disable-next-line
        return (maxMonthly.sort((a, b) =>{
            for(let i= 0 ; i<maxMonthly.length ; i++){
              return a.partnerPrequalification.emi - b.partnerPrequalification.emi;
            }
        }));
      }
  
      OnmonthlysortDECClick = () => { 
        let maxMonthly  = this.props.onFilterYearly()
        // eslint-disable-next-line
        return (maxMonthly.sort((a, b) => {
            for(let i= 0 ; i<maxMonthly.length ; i++){
              return b.partnerPrequalification.emi - a.partnerPrequalification.emi;
          }
        }));
      }

      render() {
        const totalvehicles = (this.props.onFilterYearly()).length
        return (
          <div>
          <div className = "data-vehicles">{totalvehicles} vehicles </div>
            <Product 
            OnmonthlySortDSC = {this.OnmonthlysortDECClick}
            OnmonthlySortASC = {this.OnmonthlysortASCClick} 
            OnfilterMaxMonthly= {this.props.OnfilterMaxMonthly}
            onFilterYearly = {this.props.onFilterYearly}
            />
          </div>
        );
      }
    }

Dropdown.propTypes = {
    OnmonthlySortASC : PropTypes.func,
    OnmonthlySortDSC: PropTypes.func,
    OnfilterMaxMonthly: PropTypes.func
};    

export default Dropdown;
