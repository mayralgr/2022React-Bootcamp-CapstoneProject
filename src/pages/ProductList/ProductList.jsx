import ProductsGrid from '../../components/ProductsGrids/ProductsGrid';
import Sidebar from '../../components/Sidebar/Sidebar';
import { products } from '../../mocks/en-us/products';
import { productCategories } from '../../mocks/en-us/product-categories';
import { useState } from 'react';

const ProductList = () => {
    const [activeCategoryFilters, setActiveCategoryFilters] = useState([]);
    const [activeProducts, setActiveProducts] = useState(products);
    const handleCategoryClick = (e) => {
        e.preventDefault();
        const categoryId = e.target?.id || [];
        let newActiveCategoryFilters = [];
        if (activeCategoryFilters.includes(categoryId)) {
            // delete if from the array
            newActiveCategoryFilters = activeCategoryFilters.filter(
                (category) => category !== categoryId
            );
        } else {
            // add it to the active filterss
            newActiveCategoryFilters = [...activeCategoryFilters, categoryId];
        }
        // filter the products
        let newActiveProducts = products.results?.filter((product) => {
            return newActiveCategoryFilters.some(
                (categoryId) => product.data.category.id === categoryId
            );
        });
        if (
            newActiveCategoryFilters.length === 0
        ){
            newActiveProducts = products.results;
        }
        setActiveProducts({...activeProducts, results: newActiveProducts});
        setActiveCategoryFilters(newActiveCategoryFilters);
    };

    return (
        <>
            <h1 style={{ margin: '1px' }}>This is the Product List Page</h1>
            <Sidebar
                categories={productCategories}
                handleCategoryClick={handleCategoryClick}
                activeCategoryFilters={activeCategoryFilters}
            />
            <ProductsGrid products={activeProducts} />
        </>
    );
};

export default ProductList;
