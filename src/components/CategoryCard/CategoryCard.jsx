import './CategoryCard.css'

const CategoryCard = ({ category }) => {
  return (
    <div className="categoryCard" key={category.id}>
      <a href={category.link} className='categoryCard__link' target="_blank" rel="noopener noreferrer">
        <img src={category.url_image} className='categoryCard__image' />
        <h3 className="categoryCard__title">{category.name}</h3>
      </a>
    </div>
  );
};

export default CategoryCard;