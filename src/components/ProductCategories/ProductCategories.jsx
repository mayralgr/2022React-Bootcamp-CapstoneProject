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
  margin-bottom: 2%;
`;

const Title = styled.h3`
  font-size: 4vh;
  @media (max-width: 300px) {
    display: none;
  }
`;


const ProductCategories = ({ categories }) => {
  return (
    <div>
      <Title>Choose a category</Title>
      <Wrapper>
        {categories?.results.map(category => (
          <ProductCategory key={category.id} category={category}/>
        ))}
      </Wrapper>
    </div>
  );
};

ProductCategories.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default ProductCategories;
