import Button from '../Button/Button'
import './ProductCard.css'

const ProductCard = ({ product }) => {

  const productPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price);


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return ( 
    <div className="productCard">
      <div className="productCard__image">
        <div className="productCard__image-container">
          {product.image_url && <img src={product.image_url} alt={product.name} />}
        </div>
      </div>
      <div className="productCard__info">
        <p className="productCard__brand">{product.brand}</p>
        <h3 className="productCard__name">{product.name}</h3>
        <div className="productCard__rating">
          {renderStars(product.rating)}
          <span className="productCard__rating-count">({product.reviews})</span>
        </div>
        <p className="productCard__price">{productPrice}</p>
      </div>
      <Button>Add to bag</Button>
    </div>
  );
};


export default ProductCard;