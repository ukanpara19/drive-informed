import React from 'react';
import PropTypes from 'prop-types';
import './style/product.css';
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';

const ProductDetails = (props) => {
  const { productInfo } = props;

  return (
    <div className="card-flex-item">
      <Card className="card-flex-wrapper">
        <div className="card-flex-image">
          <CardImg top width="90%" src={productInfo.evoxThumbs} alt="Car Image" />
        </div>
        <CardBody className="card-flex-content">
          <CardTitle className="heading-class">
            {productInfo.year}
            &nbsp;
            {productInfo.make}
            &nbsp;
            {productInfo.model}
            <span className="emi-class">
            $
              {Math.floor(productInfo.partnerPrequalification.emi)}
               /mon
            </span>
          </CardTitle>
          <CardSubtitle className="miles-class">
            {productInfo.odometer}
            &nbsp;
            miles *
            {productInfo.city}
            ,
            &nbsp;
            {productInfo.state}
            <span className="downPayment-class">
            $
              {Math.floor(productInfo.partnerPrequalification.downPayment)}
              &nbsp;
              down
            </span>
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

ProductDetails.propTypes = {
  productInfo: PropTypes.instanceOf.isRequired,
};

export default ProductDetails;
