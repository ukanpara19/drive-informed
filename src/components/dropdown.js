import React, { Component } from 'react';
import './style/dropdown.css';
import Data from '../data/data.json';
import Product from './product';
import {myData5} from './home';

  const myData1 = JSON.parse(JSON.stringify(Data.autos));
  // const myData2 = JSON.parse(JSON.stringify(Data.autos));
  // const myData3 = JSON.parse(JSON.stringify(Data.autos));
  // const myData4 = JSON.parse(JSON.stringify(Data.autos));

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: Data,
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        // this.OnDownPaymentSortDECClick = this.OnDownPaymentSortDECClick.bind(this)
        // this.OnDownPaymentSortASCClick = this.OnDownPaymentSortASCClick.bind(this)
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

    //   OnDownPaymentSortDECClick() { 
    //     // eslint-disable-next-line
    //     return (myData1.sort(function (a, b){
    //     for(let i= 0 ; i<myData1.length ; i++){
    //       return b.maximumDownPayment - a.maximumDownPayment;
    //     }
    //   }));
    // }
    //   OnDownPaymentSortASCClick =()=>{ 
    //     // eslint-disable-next-line
    //     return (myData1.sort(function (a, b){
    //     for(let i= 0 ; i<myData1.length ; i++){
    //       return a.maximumDownPayment - b.maximumDownPayment;
    //     }
    //   }));
    // }
    
      OnmonthlysortASCClick =()=> {
        // eslint-disable-next-line
        return ((this.props.OnfilterMaxMonthly()).sort(function (a, b){
        for(let i= 0 ; i<myData1.length ; i++){
          return a.partnerPrequalification.emi - b.partnerPrequalification.emi;
        }
      }));
      }
  
      OnmonthlysortDECClick = () => { 
        // eslint-disable-next-line
        return ((this.props.OnfilterMaxMonthly()).sort((a, b) => {
        for(let i= 0 ; i<myData1.length ; i++){
          return b.partnerPrequalification.emi - a.partnerPrequalification.emi;
        }
      }));
    }

      render() {
        // console.log(this.OnfilterMaxMonthly());
        // console.log(this.state.);
        // console.log(this.props.filteredResult());
        // console.log('Dropdown', filteredData);
        return (
          <div>
          <div className = "data-vehicles">
           {(this.props.OnfilterMaxMonthly()).length} Vehicles
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
            OnfilterMaxMonthly= {this.props.OnfilterMaxMonthly}
            // OnfilterMaxDown = {this.props.OnfilterMaxDown}
            // filteredResult = {this.props.filteredResult}
            />
          </div>
        );
      }
    }

export default Dropdown;
