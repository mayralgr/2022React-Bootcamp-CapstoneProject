import styled from 'styled-components';
import PropTypes from 'prop-types';
const Cell = styled.div`
  display: inline-table;
  background: #ff9d9c;
  text-align: center;
  border: black 5px solid;
  font-size: 2.8vw;
  color: black;
`;

const CategoryImage = styled.img`
    max-width: 100%;
}`;
const ProductCategory = ({ category }) => {
  return (
    <Cell>
      <CategoryImage
        src={category?.data?.main_image?.url}
        alt={category?.data?.main_image?.alt}
      />
      {category?.data.name}
    </Cell>
  );
};

ProductCategory.propTypes = {
  category: PropTypes.object.isRequired,
};

export default ProductCategory;
