import styled from 'styled-components';
import PropTypes from 'prop-types';
const Cell = styled.div`
  display: inline-table;
  background: grey;
  text-align: center;
  border: black 5px solid;
  font-size: 3.2vw;
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
