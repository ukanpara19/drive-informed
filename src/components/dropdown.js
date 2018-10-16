import React, { Component } from 'react';
import './style/dropdown.css';
import Data from '../data/data.json';
import Product from './product';

  const myData = JSON.parse(JSON.stringify(Data.autos));
  const myData1 = JSON.parse(JSON.stringify(Data.autos));
  const myData2 = JSON.parse(JSON.stringify(Data.autos));
  const myData3 = JSON.parse(JSON.stringify(Data.autos));
  const myData4 = JSON.parse(JSON.stringify(Data.autos));

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
          data: Data,
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
        }
      }

      OnDownPaymentSortDECClick() { 
        // eslint-disable-next-line
        return (myData1.sort(function (a, b){
        for(let i= 0 ; i<myData1.length ; i++){
          return b.estimatedDownPayment - a.estimatedDownPayment;
        }
      }));
    }
      OnDownPaymentSortASCClick(){ 
        // eslint-disable-next-line
        return (myData2.sort(function (a, b){
        for(let i= 0 ; i<myData2.length ; i++){
          return a.estimatedDownPayment - b.estimatedDownPayment;
        }
      }));
    }
      OnmonthlysortASCClick() {
        // eslint-disable-next-line
        return (myData3.sort(function (a, b){
        for(let i= 0 ; i<myData3.length ; i++){
          return a.partnerPrequalification.emi - b.partnerPrequalification.emi;
        }
      }));
      }
  
      OnmonthlysortDECClick() { 
        // eslint-disable-next-line
        return (myData4.sort((a, b) => {
        for(let i= 0 ; i<myData4.length ; i++){
          return b.partnerPrequalification.emi - a.partnerPrequalification.emi;
        }
      }));
    }      
      render() {
        // console.log(this.props);
        return (
          <div>
          <div className = "data-vehicles">
           {Data.autoCount} Vehicles
           </div>
            {this.state.showMenu ? (
                  <div className="menu" ref={(element) => { this.dropdownMenu = element; }} >
                    
                  </div>
                ): (null)
            } 
            <Product 
            OnDownPaymentSortDSC = {this.OnDownPaymentSortDECClick}
            OnDownPaymentSortASC = {this.OnDownPaymentSortASCClick}
            OnmonthlySortDSC = {this.OnmonthlysortDECClick}
            OnmonthlySortASC = {this.OnmonthlysortASCClick} 

            />
          </div>
        );
      }
    }
// 
export default Dropdown;
