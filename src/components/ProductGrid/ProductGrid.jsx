import { useState, useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css'




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
          <h2 className="">{title}</h2>
          <a href={url} target="_blank" rel="noopener noreferrer">{textLink}</a>
        </div>
        <div className="productGrid__container-total-items">
          <p className="">{products.length} items</p>
        </div>
        <div className="productGrid__cards-container">
          <div className="productGrid__cards-items">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default ProductGrid;