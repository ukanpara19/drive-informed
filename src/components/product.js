import React , {Component}  from 'react';
import './style/product.css';
import ProductDetails from './productDetails';
import Data from '../data/data.json';
import Dropdown from './dropdown';

  const myData = JSON.parse(JSON.stringify(Data.autos));
  const myData1 = JSON.parse(JSON.stringify(Data.autos));
  const myData2 = JSON.parse(JSON.stringify(Data.autos));
  const myData3 = JSON.parse(JSON.stringify(Data.autos));
  const myData4 = JSON.parse(JSON.stringify(Data.autos));

class Product extends Component{
  constructor(props){
    super(props)
      this.state = {
        data: myData
      }
    this.OnDownPaymentSortASCClick = this.OnDownPaymentSortASCClick.bind(this);
    this.OnmonthlysortASCClick  =this.OnmonthlysortASCClick.bind(this);
    this.OnmonthlysortDECClick  = this.OnmonthlysortDECClick.bind(this);
    this.OnDownPaymentSortDECClick = this.OnDownPaymentSortDECClick.bind(this);
  }
    OnDownPaymentSortDECClick() { 
      // eslint-disable-next-line
      return (myData1.sort(function (a, b){
      for(let i= 0 ; i<myData1.length ; i++){
        return b.partnerPrequalification.downPayment - a.partnerPrequalification.downPayment;
      }
    }));
  }
    OnDownPaymentSortASCClick(){ 
      // eslint-disable-next-line
      return (myData2.sort(function (a, b){
      for(let i= 0 ; i<myData2.length ; i++){
        return a.partnerPrequalification.downPayment - b.partnerPrequalification.downPayment;
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

  render(){
    return (
      <div>
          <Dropdown 
            OnDownPaymentSortDEC = {this.OnDownPaymentSortDECClick}
            OnDownPaymentSortASC = {this.OnDownPaymentSortASCClick}
            OnmonthlySortDEC = {this.OnmonthlysortDECClick}
            OnmonthlySortASC = {this.OnmonthlysortASCClick}
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
