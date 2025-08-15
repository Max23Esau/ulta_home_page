import Button from '../../../ui/Button/Button'
import FreeGift from '../../../ui/Labels/FreeGift/FreeGift';
import PorcentageDiscount from '../../../ui/Labels/PorcentageDiscount/PorcentageDiscount';
import './CardProduct.css'

const CardProduct = ({ product }) => {

  const productPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return ( 
    <div className="CardProduct">
      <a href={product.link_product} className="CardProduct__link">
      <div className="CardProduct__image">
        <div className="CardProduct__image-container">
          { product.image_url && <img src={product.image_url} loading="lazy" alt={product.name} /> }
          { product.discount > 0 ? <PorcentageDiscount discount={product.discount}/> : null }
        </div>
      </div>
      <div className="CardProduct__info">
        <p className="CardProduct__brand">{product.brand}</p>
        <h3 className="CardProduct__name">{product.name}</h3>

        {
          product.reviews > 0 
          ?        
            <>
              <div className="CardProduct__rating">
                {renderStars(product.rating)}
                <span className="CardProduct__rating-count">({product.reviews})</span>
              </div>
            </> 
          : null
        }

        { product.free_product ? <FreeGift /> : null }
        
        <p className="CardProduct__price">{productPrice}</p>
      </div>
      </a>
      
      <Button>Add to bag</Button>
    </div>
  );
};


export default CardProduct;