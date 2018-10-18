import React, { Component } from 'react';
import './style/dropdown.css';
import Product from './product';

class Dropdown extends Component {
      
      // showMenu =(event)=> {
      //   event.preventDefault();
      //   this.setState({ showMenu: true }, () => {
      //     document.addEventListener('click', this.closeMenu);
      //   });
      // }
      
      // closeMenu = (event) => {
      //   if (!this.dropdownMenu.contains(event.target)) {
      //     this.setState({ showMenu: false }, () => {
      //       document.removeEventListener('click', this.closeMenu);
      //     });  
      //   }
      // }
    
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
            {/* {this.state.showMenu ? (
                  <div className="menu" ref={(element) => { this.dropdownMenu = element; }} >

                  </div>
                ): (null)
            }  */}
            <Product 
            OnmonthlySortDSC = {this.OnmonthlysortDECClick}
            OnmonthlySortASC = {this.OnmonthlysortASCClick} 
            OnfilterMaxMonthly= {this.props.OnfilterMaxMonthly}
            />
          </div>
        );
      }
    }

export default Dropdown;
