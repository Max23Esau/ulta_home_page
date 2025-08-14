import Button from '../Button/Button'
import FreeGift from '../Labels/FreeGift/FreeGift';
import PorcentageDiscount from '../Labels/PorcentageDiscount/PorcentageDiscount';
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
          { product.image_url && <img src={product.image_url} alt={product.name} /> }
          { product.discount > 0 ? <PorcentageDiscount discount={product.discount}/> : null }
        </div>
      </div>
      <div className="productCard__info">
        <p className="productCard__brand">{product.brand}</p>
        <h3 className="productCard__name">{product.name}</h3>

        {
          product.reviews > 0 
          ?        
            <>
              <div className="productCard__rating">
                {renderStars(product.rating)}
                <span className="productCard__rating-count">({product.reviews})</span>
              </div>
            </> 
          : null
        }

        { product.free_product ? <FreeGift /> : null }
        
        <p className="productCard__price">{productPrice}</p>
      </div>
      <Button>Add to bag</Button>
    </div>
  );
};


export default ProductCard;