import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../utils/hooks/useProductDetail';
// import { useEffect } from 'react';

import Spinner from 'react-bootstrap/Spinner';
import Product from '../../components/ProductsGrids/Product/Product';

const ProductDetail = () => {
    const { productId } = useParams();
    const { data: productData, isLoading: productDataLoading } =
        useProductDetail(productId);
        
    return (
        <>
            <h2>Product Detail Page</h2>
            {productDataLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <div>
                    <h1>Product here</h1>
                {productData?.results.map((product) => (
                    <Product key={product.id} product={product} />
                ))}</div>
            )}
        </>
    );
};

export default ProductDetail;
