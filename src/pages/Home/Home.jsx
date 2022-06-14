import ProductCategories from '../../components/ProductCategories/ProductCategories';
import Slider from '../../components/Slider/Slider';
import FeaturedProductGrid from '../../components/ProductsGrids/FeaturedProductsGrid';
import { productCategories } from '../../mocks/en-us/product-categories';
import { featuredProducts } from '../../mocks/en-us/featured-products';
import Button from '../../styles/ButtonSeeMore.styled';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';

const Home = () => {
    const { data, isLoading } = useFeaturedBanners();

    return (
        <div style={{ paddingBottom: '2rem' }}>
            <ProductCategories categories={productCategories} />
            <Slider isLoading={isLoading} featuredBanners={data} />
            <FeaturedProductGrid products={featuredProducts} />
            <Button to="/products">View all products</Button>
        </div>
    );
};

export default Home;
