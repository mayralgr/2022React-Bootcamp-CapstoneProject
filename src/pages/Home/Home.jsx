import ProductCategories from '../../components/ProductCategories/ProductCategories';
import Slider from '../../components/Slider/Slider';

import { featuredBanners } from '../../mocks/es-mx/featured-banners';
import { productCategories } from '../../mocks/es-mx/product-categories';

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <Slider featuredBanners={featuredBanners} />
      <ProductCategories categories={productCategories}/>
    </>
  );
};

export default Home;
