import styled from 'styled-components';
import ProductCategory from './ProductCategory/ProductCategory';
import PropTypes from 'prop-types';
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const ProductCategories = ({ categories }) => {
  return (
    <>
      <h3>Choose a category</h3>
      <Wrapper>
        {categories?.results.map(category => (
          <ProductCategory key={category.id} category={category}/>
        ))}
      </Wrapper>
    </>
  );
};

ProductCategories.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default ProductCategories;
