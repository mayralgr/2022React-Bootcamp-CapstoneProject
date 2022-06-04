import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { featuredBanners } from '../../mocks/es-mx/featured-banners';

const Slider = () => {
  // console.log(featuredBanners);
  debugger;
  return (
    <div className='container'>
      <Carousel variant="dark">
        {featuredBanners?.results.map((banner) => {
          return (
            <Carousel.Item interval={1500} key={banner.id}>
              <img
                className="d-block w-100"
                src={banner.data.main_image.url}
                alt={banner.data.main_image.alt}
              />
              <Carousel.Caption>
                <h3 style={{color: '#8F3927'}}>{banner.data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
