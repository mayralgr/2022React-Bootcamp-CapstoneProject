/* eslint-disable max-len */
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Cell = styled.div`
  display: inline-table;
  background: grey;
  text-align: center;
  border: black 5px solid;
  // font-size: 4.2vw;
  heigth: 20%;
  position: relative;
`;

const ProductImage = styled.img`
    max-width: 100%;
}`;

const PricePill = styled.span`
  background-color: #fde4a1;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  @media (max-width: 550px) {
  font-size: 3vw;
  padding: 5px 10px;
  margin: 0;
  }
}`;

const CategoryPill = styled.span`
  background-color: #9beaf9;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  @media (max-width: 770px) {
    display: none;
  }
}`;

const PillsWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  color: white;
  font-size: 1rem;
  text-align: center;
`;

const ProductName = styled.p`
  color: black;
  background-color: rgba(128, 128, 128, 0.5);
  @media (max-width: 650px) {
    display: none;
  }
`;

const Product = ({ product }) => {
  return (
    product.data && (
      <Cell>
        <ProductImage
          src={product.data.mainimage?.url}
          alt={product.data.mainimage?.alt}
        />
        <PillsWrapper>
          <ProductName>{product.data.name}</ProductName>
          <CategoryPill>{product.data.category.slug}</CategoryPill>
          <PricePill>$ {product.data.price}</PricePill>
        </PillsWrapper>
      </Cell>
    )
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
