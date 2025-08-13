import './HeroBanner.css'
import Button from '../Button/Button'

const HeroSection = ({title, description, image, link}) => {
  return (
    <section className="HeroBanner">
      <a href={link} className='HeroBanner__image-container' target="_blank" rel="noopener noreferrer">
        <div className="">
          <img src={image} alt="" />
        </div>
      </a>
      <div className="HeroBanner__content">
        <div className="HeroBanner__title">
          <h1>{title}</h1>
        </div>
        <div className="HeroBanner__subtitle">
          <p>{description}</p>
        </div>
        <div className="HeroBanner__link">
          <Button url={link}>Shop now</Button>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;