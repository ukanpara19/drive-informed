import React , {Component}  from 'react';
import './style/product.css';
import ProductDetails from './productDetails';
import Data from '../data/data.json';

class Product extends Component{
  constructor(props){
    super(props)
    this.state = {
      Data: Data,
      golbalValue: 0
    }
  }
  
  renderSwtich = (golbalValue) => {
    switch(golbalValue){
      case 1: 
          console.log(this.state.golbalValue);
          return this.props.OnmonthlySortASC().map(function(informed){
            return <ProductDetails productInfo={informed} />
          });
      case 2:
          return this.props.OnmonthlySortDSC().map(function(informed){
            return <ProductDetails productInfo={informed} />
          });
          
      case 3:
          console.log(this.state.golbalValue);
          return this.props.OnDownPaymentSortASC().map(function(informed){
            return <ProductDetails productInfo={informed} />
          });
      case 4:
         return this.props.OnDownPaymentSortDSC().map(function(informed){
            return <ProductDetails productInfo={informed} />
          });
      default:
          return Data.autos.map(function(informed){
            return <ProductDetails productInfo={informed} />
          });              
    }
  }

  render(){
  console.log(this.state.Data);
    return (
      <div>
      
      <button onClick={() => {
        this.setState({golbalValue: 3});
        console.log('DownPay - ASC',this.props.OnDownPaymentSortASC())
        }}>Down Payment <span className='dollar-class' >$ - $$</span></button>

      <button onClick={() => 
      {
      this.setState({golbalValue: 4});
        console.log(this.state.golbalValue);
          console.log('DownPay - DEC',this.props.OnDownPaymentSortDSC())
      }}
      >Down Payment <span className='dollar-class'>$$ - $</span></button>

      <button onClick={() => {
       this.setState({golbalValue: 1 });
              console.log('MonthylPay - ASC',this.props.OnmonthlySortASC())
       }} 
       >Monthly Payment<span className='dollar-class'>$ - $$</span> </button>

      <button onClick={() =>{
          this.setState({golbalValue: 2 });
          console.log(this.state.golbalValue);
          this.setState({golbalValue: 2});
          console.log('MonthlyPay - DSC',this.props.OnmonthlySortDSC())
      }}>Monthly Payment<span className='dollar-class'>$$ - $</span></button>

      <div className= 'card-flex'> 
          {this.renderSwtich(this.state.golbalValue)}            
      </div> 
      </div>
    );
  }
}

export default Product;
