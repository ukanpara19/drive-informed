import React , {Component}  from 'react';
import './style/product.css';
import ProductDetails from './productDetails';
import Data from '../data/data.json';
import Dropdown from './dropdown';

  const myData = Data.autos;
  const stringJSON = JSON.stringify(myData);
  const objsJSON = JSON.parse(stringJSON); 

class Product extends Component{
  constructor(props){
    super(props)
    this.state = {  
    }
    this.OnDownPaymentSortASCClick = this.OnDownPaymentSortASCClick.bind(this);
    this.OnmonthlysortASCClick  =this.OnmonthlysortASCClick.bind(this);
    this.OnmonthlysortDECClick  = this.OnmonthlysortDECClick.bind(this);
    this.OnDownPaymentSortDECClick = this.OnDownPaymentSortDECClick.bind(this);
  }

  OnmonthlysortDECClick () { 
    return objsJSON.sort((a, b) =>{
    for(let i= 0 ; i<Data.autos.length ; i++){
      return b.partnerPrequalification.emi - a.partnerPrequalification.emi;
    }
  });
}

 OnmonthlysortASCClick () {
  return objsJSON.sort(function (a, b){
   for(let i= 0 ; i<objsJSON.length ; i++){
     return a.partnerPrequalification.emi - b.partnerPrequalification.emi;
   }
 });
}

  OnDownPaymentSortDECClick () { 
    return objsJSON.sort(function (a, b){
    for(let i= 0 ; i<objsJSON.length ; i++){
      return b.partnerPrequalification.downPayment - a.partnerPrequalification.downPayment;
    }
  });
}
  OnDownPaymentSortASCClick (){ 
    return objsJSON.sort(function (a, b){
    for(let i= 0 ; i<objsJSON.length ; i++){
      return a.partnerPrequalification.downPayment - b.partnerPrequalification.downPayment;
    }
  });
}

  render(){
    return (
      <div>
          <Dropdown 
            OnmonthlySortASC = {this.OnmonthlysortASCClick()}
            OnmonthlySortDEC = {this.OnmonthlysortDECClick()}
            OnDownPaymentSortASC = {this.OnDownPaymentSortASCClick()}
            OnDownPaymentSortDEC = {this.OnDownPaymentSortDECClick()}
          />
          <div className= 'card-flex'>
            {objsJSON.map(function(informed){
              return(
                <ProductDetails productInfo={informed} />
            )
          })
        }
      </div> 
      </div>
    );
  }
}

export default Product;
