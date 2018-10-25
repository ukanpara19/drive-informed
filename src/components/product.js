import React , {Component}  from 'react';
import PropTypes from 'prop-types';
import './style/product.css';
import ProductDetails from './productDetails';

class Product extends Component{
  constructor(props){
    super(props)
    this.state = {
      golbalValue: 0
    }
  }

  renderSwitch = (golbalValue) => {
    switch(golbalValue){
      case 1: 
          return this.props.OnmonthlySortASC().map(function(informed){
            return <ProductDetails productInfo={informed} />
          });
      case 2:
          return this.props.OnmonthlySortDSC().map(function(informed){
            return <ProductDetails productInfo={informed} />
      default:
          return (this.props.OnfilterMaxMonthly()).map(function(informed){
            return <ProductDetails productInfo={informed} />
          });              
    }
  }

  render(){
    return (
      <div>
          <button 
              onClick= {() =>
              { this.setState({golbalValue: 1 }) 
                this.props.OnmonthlySortASC() }}
                > Monthly Payment<span className='dollar-class'>$ - $$</span>
          </button>
          <button 
              onClick= {() => 
              { this.setState({golbalValue: 2 })
                this.props.OnmonthlySortDSC() }} 
                > Monthly Payment<span className='dollar-class'>$$ - $</span>
          </button>
          <div className= 'card-flex'> 
            {this.renderSwitch(this.state.golbalValue)}
          </div> 
      </div>
    );
  }
}

Product.propTypes = {
  OnmonthlySortASC : PropTypes.func.isRequired,
  OnmonthlySortDSC: PropTypes.func.isRequired,
  OnfilterMaxMonthly: PropTypes.func.isRequired
  };

export default Product;
