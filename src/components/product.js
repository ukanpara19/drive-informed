import React , {Component}  from 'react';
import PropTypes from 'prop-types';
import './style/product.css';
import ProductDetails from './productDetails';
import { Button } from 'semantic-ui-react'

class Product extends Component{
  constructor(props){
    super(props)
    this.state = {
      golbalValue: 0
    }
  }

  renderSwtich = (golbalValue) => {
    switch(golbalValue){
      case 1: 
          return this.props.OnmonthlySortASC().map(function(informed){
            return <ProductDetails productInfo={informed} />
          });
      case 2:
          return this.props.OnmonthlySortDSC().map(function(informed){
            return <ProductDetails productInfo={informed} />
          });   
      default:
          return ((this.props.OnfilterMaxMonthly()) && this.props.onFilterYearly()).map(function(informed){
            return <ProductDetails productInfo={informed} />
          });              
    }
  }

  render(){
    return (
      <div>
          <Button 
            content='Primary'
              onClick= {() =>
              { this.setState({golbalValue: 1}) 
                this.props.OnmonthlySortASC()}}
                > Monthly Payment<span className='dollar-class'> $ - $$</span>
          </Button>
          <Button 
            content='Primary'
              onClick= {() => 
              { this.setState({golbalValue: 2 })
                this.props.OnmonthlySortDSC() }} 
                > Monthly Payment<span className='dollar-class'> $$ - $</span>
          </Button>
          <div className= 'card-flex'> 
            {this.renderSwtich(this.state.golbalValue)}
          </div> 
      </div>
    );
  }
}

Product.propTypes = {
  OnmonthlySortASC : PropTypes.func,
  OnmonthlySortDSC: PropTypes.func,
  OnfilterMaxMonthly: PropTypes.func
  };

export default Product;
