import React , {Component}  from 'react';
import './style/product.css';
import ProductDetails from './productDetails';
import Data from '../data/data.json';
import Dropdown from './dropdown';

  const myData = Data.autos;

class Product extends Component{
  constructor(props){
    super(props)

    this.OnDownPaymentSortASCClick = this.OnDownPaymentSortASCClick.bind(this);
    this.OnmonthlysortASCClick  =this.OnmonthlysortASCClick.bind(this);
    this.OnmonthlysortDECClick  = this.OnmonthlysortDECClick.bind(this);
    this.OnDownPaymentSortDECClick = this.OnDownPaymentSortDECClick.bind(this);
  }
  
  OnDownPaymentSortDECClick () { 
    return (myData.sort(function (a, b){
    for(let i= 0 ; i<myData.length ; i++){
      return b.partnerPrequalification.downPayment - a.partnerPrequalification.downPayment;
    }
  }));
}

  OnmonthlysortASCClick () {
    return (myData.sort(function (a, b){
     for(let i= 0 ; i<myData.length ; i++){
       return a.partnerPrequalification.emi - b.partnerPrequalification.emi;
     }
   }));
  }

  OnmonthlysortDECClick () { 
    return (myData.sort((a, b) =>{
    for(let i= 0 ; i<myData.length ; i++){
      return b.partnerPrequalification.emi - a.partnerPrequalification.emi;
    }
  }));
}
 
  OnDownPaymentSortASCClick (){ 
    return( myData.sort(function (a, b){
    for(let i= 0 ; i<myData.length ; i++){
      return a.partnerPrequalification.downPayment - b.partnerPrequalification.downPayment;
    }
  }));
}

  render(){
    console.log(this.OnDownPaymentSortASCClick());
    // console.log(this.OnmonthlysortDECClick());
    // console.log(this.OnmonthlysortASCClick());
    // console.log(this.OnDownPaymentSortDECClick());
    return (
      <div>
          <Dropdown 
            OnmonthlySortASC = { this.OnmonthlysortASCClick() }
            OnmonthlySortDEC = { this.OnmonthlysortDECClick() }
            OnDownPaymentSortASC = { this.OnDownPaymentSortASCClick() }
            OnDownPaymentSortDEC = { this.OnDownPaymentSortDECClick()}
          />
          <button onClick={this.OnmonthlysortASCClick}> ASC sort</button>
          <div className= 'card-flex'>
            {myData.map(function(informed){
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
