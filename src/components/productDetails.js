import React, { Component } from 'react';
import './style/product.css';
import { Card, CardImg, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import Data from '../data/data.json';

class ProductDetails extends Component{
    render(){
        const productInfo = this.props.productInfo;
         return (
          <div className= 'card-flex-item'>
            <Card className= 'card-flex-wrapper'> 
                <div className = 'card-flex-image'>
                  <CardImg top width = '90%'  src={productInfo.evoxThumbs} alt="Car Image" />
                </div>
                <CardBody className= 'card-flex-content'>
                  <CardTitle className = 'heading-class'>{productInfo.year} {productInfo.make} {productInfo.model}
                    <span className='emi-class'>$ {Math.floor(productInfo.partnerPrequalification.emi)}/mo</span>
                  </CardTitle>
                  <CardSubtitle className='miles-class'>{productInfo.odometer} miles *{productInfo.city},{productInfo.state}
                    <span className='downPayment-clas s'>$ {Math.floor(productInfo.partnerPrequalification.downPayment)} down</span>
                  </CardSubtitle>
                </CardBody>
              </Card> 
            </div>
    );
  }
}

export default ProductDetails;

