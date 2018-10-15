import React , {Component}  from 'react';
import './style/product.css';
import ProductDetails from './productDetails';
import Data from '../data/data.json';

  const myData = Data.autos;
  const stringJSON = JSON.stringify(myData);
  const objsJSON = JSON.parse(stringJSON); 

class Product extends Component{
  constructor(props){
    super(props)
    this.state = {
      OnmonthlysortDECClick : false,
      OnmonthlysortASCClick: false,
      OnDownPaymentSortASCClick:false,
      OnDownPaymentSortDECClick: false      
    }
    this.OnDownPaymentSortASCClick = this.OnDownPaymentSortASCClick.bind(this);
  }

  OnmonthlysortDECClick() {
    objsJSON.sort((a, b) =>{
    for(let i= 0 ; i<Data.autos.length ; i++){
      return console.log (b.partnerPrequalification.emi - a.partnerPrequalification.emi);
    }
  });
}
 OnmonthlysortASCClick () {
  objsJSON.sort(function (a, b){
   for(let i= 0 ; i<objsJSON.length ; i++){
     return console.log(a.partnerPrequalification.emi - b.partnerPrequalification.emi);
   }
   this.setState({ OnmonthlysortASCClick: true});
 });
}

  OnDownPaymentSortDECClick (){ objsJSON.sort(function (a, b){
    for(let i= 0 ; i<objsJSON.length ; i++){
      return b.partnerPrequalification.downPayment - a.partnerPrequalification.downPayment;
    }
  });
}
  OnDownPaymentSortASCClick (){ objsJSON.sort(function (a, b){
    for(let i= 0 ; i<objsJSON.length ; i++){
      return a.partnerPrequalification.downPayment - b.partnerPrequalification.downPayment;
    }
  });
}
  render(){
    return (
      <div className= 'card-flex'>
      <button onClick={this.OnmonthlysortASCClick}>EMI-ASC</button>      
        {objsJSON.map(function(informed){
            return(
              <ProductDetails productInfo={informed} />
            )
          })
        }
      </div> 
    );
  }
}

export default Product;
