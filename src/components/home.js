import React, { Component } from 'react';
import Product from './product';
import SideBar from './sidebar';
import './style/home.css';
import Dropdown from './dropdown';
import Data from '../data/data.json';

const myData = Data.autos;
var stringJSON = JSON.stringify(myData);
var objsJSON = JSON.parse(stringJSON);
class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      Data: Data
    }
  }
  
//  DownPaymentSortASC = objsJSON.sort(function (a, b){
//   for(let i= 0 ; i<objsJSON.length ; i++){
//     return a.partnerPrequalification.downPayment - b.partnerPrequalification.downPayment;
//   }
// }
// );

 monthlysortASC = objsJSON.sort(function (a, b){
  for(let i= 0 ; i<objsJSON.length ; i++){
    return a.partnerPrequalification.emi - b.partnerPrequalification.emi;
  }
}
);

//  monthlysortDEC = objsJSON.sort(function (a, b){
//       for(let i= 0 ; i<objsJSON.length ; i++){
//         return b.partnerPrequalification.emi - a.partnerPrequalification.emi;
//       }
//     }
//     );

//   DownPaymentSortDEC = objsJSON.sort(function (a, b){
//       for(let i= 0 ; i<objsJSON.length ; i++){
//         return b.partnerPrequalification.downPayment - a.partnerPrequalification.downPayment;
//       }
//     }
//     );


  render() {
    return (
      <div className='home-class'>
        <div className="slider-col">
          <SideBar />
        </div>
        <div className = "dropdown-class">
          <Dropdown />
        </div>
        <div className="product-col">
          <Product 
            Data = {this.state.Data}
            sortBy= {this.sortBy}
          />
        </div> 
      </div>
    );
  }
} 

export default Home;
