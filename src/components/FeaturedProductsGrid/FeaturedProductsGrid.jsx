import styled from 'styled-components';
import PropTypes from 'prop-types';
import Product from './Product/Product';
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const FeaturedProductGrid = ({ products }) => {
  return (
    <Wrapper>
      {products?.results.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

FeaturedProductGrid.propTypes = {
  products: PropTypes.object.isRequired,
};

export default FeaturedProductGrid;
