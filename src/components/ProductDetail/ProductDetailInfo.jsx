import * as React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import { useCategories } from '../../utils/hooks/useCategories';
import { useEffect, useState } from 'react';
import ProductName from '../../styles/ProductName.styled';
import PricePill from '../../styles/PricePill.styled';
import CategoryPill from '../../styles/CategoryPill.styled';
import PillsWrapper from '../../styles/PillsWrapper.styled';
import CartPill from '../../styles/CartAddButton.styled';
import { CartCheckFill } from 'react-bootstrap-icons';
import { useCart } from '../../contexts/CartContext';

const ProductDetailInfo = ({ product }) => {
    const { data: categoriesData, isLoading: categoriesLoading } =
        useCategories();
    const [categoryInfo, setCategoryInfo] = useState();
    const [numberOfItems, setNumberOfItems] = useState(0);
    const { state, dispatch } = useCart();

    const handleItemsChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const itemsToAdd = parseInt(e.target.value);
        setNumberOfItems(itemsToAdd);
    };

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
        checkQtyVsStock(product.id, numberOfItems, product.data.stock)
            ? dispatch({
                  type: 'addItem',
                  payload: {
                      id: product.id,
                      name: product.data.name,
                      price: product.data.price,
                      qty: numberOfItems,
                      mainImage: product.data.mainimage,
                      stock: product.data.stock,
                  },
              })
            : alert('Not enough stock');
    };

    useEffect(() => {
        if (!categoriesLoading) {
            const category = categoriesData?.results.find(
                (c) => c.id === product.data.category.id
            );
            setCategoryInfo(category);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        product.data && (
            <>
                <div style={{ width: '50%' }}>
                    <Carousel variant="dark" style={{ float: 'left' }}>
                        {product.data?.images.map((image, index) => {
                            return (
                                <Carousel.Item
                                    interval={1500}
                                    key={product.id + index}>
                                    <img
                                        className="d-block w-100"
                                        src={image.image.url}
                                        alt={image.image.alt ?? image.image.url}
                                    />
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                </div>
                <div className="Info" style={{ width: '50%', float: 'right' }}>
                    <ProductName style={{ fontSize: '2em' }}>
                        {product.data.name}
                    </ProductName>
                    <p>{product.data.description[0].text}</p>
                    <PillsWrapper style={{ position: 'relative' }}>
                        {product.tags?.map((tag) => (
                            <CategoryPill
                                key={product.id + tag}
                                style={{ backgroundColor: '#F77F00' }}>
                                {tag}
                            </CategoryPill>
                        ))}
                    </PillsWrapper>
                    <PillsWrapper
                        style={{ display: 'grid', position: 'relative' }}>
                        <PricePill>$ {product.data.price}</PricePill>
                        <CategoryPill
                            style={{
                                backgroundColor: '#FCBF49',
                                color: 'black',
                            }}>
                            SKU: {product.data.sku}
                        </CategoryPill>
                        {categoryInfo && (
                            <CategoryPill>
                                {categoryInfo?.data.name}
                            </CategoryPill>
                        )}
                    </PillsWrapper>
                    <label>Items to add to the cart</label>

                    <input
                        type="number"
                        name="itemsToAdd"
                        id="itemsToAdd"
                        value={numberOfItems}
                        onChange={handleItemsChange}
                        min={0}
                        max={product?.data?.stock ?? 1 - { numberOfItems }}
                    />
                    {product?.data?.stock !== 0 && (
                        <CartPill
                            onClick={ChangeCart}
                            style={{ backgroundColor: 'purple' }}
                            type="button">
                            <CartCheckFill
                                style={{ color: 'white' }}
                            />
                        </CartPill>
                    )}
                </div>
            </>
        )
    );
};

ProductDetailInfo.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductDetailInfo;
