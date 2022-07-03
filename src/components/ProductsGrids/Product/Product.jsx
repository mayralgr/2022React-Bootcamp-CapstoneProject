import PropTypes from 'prop-types';
import ProductImage from '../../../styles/ProducImage.styled';
import Cell from '../../../styles/Cell.styled';
import PricePill from '../../../styles/PricePill.styled';
import CategoryPill from '../../../styles/CategoryPill.styled';
import PillsWrapper from '../../../styles/PillsWrapper.styled';
import ProductName from '../../../styles/ProductName.styled';
import { CartCheckFill, FileTextFill } from 'react-bootstrap-icons';
import CartPill from '../../../styles/CartAddButton.styled';
import { Link } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';

const Product = ({ product }) => {
    const { state, dispatch } = useCart();

    const checkQtyVsStock = (id, qty, stock) => {
        const itemInCart = state.items.find((i) => i.id === id);
        if (!itemInCart && qty <= stock) {
            return true;
        }
        if (itemInCart && itemInCart.qty + qty <= stock) {
            return true;
        }
        return false;
    };

    const ChangeCart = () => {
        checkQtyVsStock(product.id, 1, product.data.stock)
            ? dispatch({
                  type: 'addItem',
                  payload: {
                      id: product.id,
                      name: product.data.name,
                      price: product.data.price,
                      qty: 1,
                      mainImage: product.data.mainimage,
                      stock: product.data.stock,
                  },
              })
            : alert('Not enough stock');
    };

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
                    {product.data.stock && (
                        <CartPill type="button">
                            <CartCheckFill
                                onClick={ChangeCart}
                                style={{ color: 'white' }}
                            />
                        </CartPill>
                    )}
                    <Link to={`/product/${product.id}`}>
                        <CartPill
                            type="button"
                            style={{ backgroundColor: '#2E0249' }}>
                            <FileTextFill style={{ color: 'white' }} />
                        </CartPill>
                    </Link>
                </PillsWrapper>
            </Cell>
        )
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;
