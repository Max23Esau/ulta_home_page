import './CardCategory.css'

const CardCategory = ({ category }) => {
  return (
    <div className="CardCategory">
      <a href={category.link} className='CardCategory__link' target="_blank" rel="noopener noreferrer">
        <img src={category.url_image} className='CardCategory__image' />
        <h3 className="CardCategory__title">{category.name}</h3>
      </a>
    </div>
  );
};

export default CardCategory;