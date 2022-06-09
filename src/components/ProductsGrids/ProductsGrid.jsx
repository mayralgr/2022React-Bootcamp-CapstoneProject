
import PropTypes from 'prop-types';
import Wrapper from '../../styles/ProductGridWrapper.styled';
import Product from './Product/Product';

const ProductsGrid = ({ products }) => (
  <Wrapper>
    {products?.results.length > 0 ? (products?.results?.map((product) => (
      <Product key={product.id} product={product} />
    ))) : (<div>No products found</div>)}
  </Wrapper>
);

ProductsGrid.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ProductsGrid;
