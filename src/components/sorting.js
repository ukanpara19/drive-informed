import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/dropdown.css';
import Product from './product';

class Dropdown extends Component {
      
      OnmonthlysortASCClick = ()=> {
        let maxMonthly  = this.props.OnfilterMaxMonthly()
        // eslint-disable-next-line
        return (maxMonthly.sort((a, b) =>{
            for(let i= 0 ; i<maxMonthly.length ; i++){
              return a.partnerPrequalification.emi - b.partnerPrequalification.emi;
            }
        }));
      }
  
      OnmonthlysortDECClick = () => { 
        let maxMonthly  = this.props.OnfilterMaxMonthly()
        // eslint-disable-next-line
        return (maxMonthly.sort((a, b) => {
            for(let i= 0 ; i<maxMonthly.length ; i++){
              return b.partnerPrequalification.emi - a.partnerPrequalification.emi;
          }
        }));
      }

      render() {
        const totalvehicles = (this.props.OnfilterMaxMonthly()).length
        return (
          <div>
          <div className = "data-vehicles">{totalvehicles} vehicles </div>
            <Product 
            OnmonthlySortDSC = {this.OnmonthlysortDECClick}
            OnmonthlySortASC = {this.OnmonthlysortASCClick} 
            OnfilterMaxMonthly= {this.props.OnfilterMaxMonthly}
            />
          </div>
        );
      }
    }

Dropdown.propTypes = {
    OnmonthlySortASC : PropTypes.func.isRequired,
    OnmonthlySortDSC: PropTypes.func.isRequired,
    OnfilterMaxMonthly: PropTypes.func.isRequired
};    

export default Dropdown;
