import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import ProductCard from '../ProductCard/ProductCard';

import './ProductGrid.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const ProductGrid = ({ title, textLink, url }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../public/data/featuredProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);


  return (
    <section className="productGrid">
      <div className="productGrid__container">
        <div className="productGrid__container-heading">
          <div className="productGrid__container-deails">
            <h2 className="">{title}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer">{textLink}</a>
          </div>
          <div className="productGrid__container-total-items">
            <p className="">{products.length} items</p>
            <div className="swiper-nav-buttons">
              <button className="swiper-button-prev-custom"></button>
              <button className="swiper-button-next-custom"></button>
            </div>
          </div>
        </div>
        <div className="productGrid__cards-container">
            <Swiper
              cssMode={true}
              slidesPerView={4}
              spaceBetween={16}
              grabCursor={true}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              breakpoints={{
                200: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },
                500: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                991: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
              }}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard]}
              className="mySwiper"
            >
              {products.map((product, index) => (
              <SwiperSlide>
                <ProductCard key={index} product={product} />
              </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
    </section>
  );
};


export default ProductGrid;