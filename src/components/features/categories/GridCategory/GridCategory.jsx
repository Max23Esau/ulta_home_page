import { useEffect, useState } from "react";
import CardCategory from "../../categories/CardCategory/CardCategory"
import "./GridCategory.css"

const GridCategory = ({title, bgColor}) => {

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("/data/listCategories.json")
      .then((res) => res.json())
      .then((data) => setcategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  return (
    <section className="GridCategory" style={{backgroundColor: bgColor }}>
      <div className="GridCategory__container">
        <div className="GridCategory__header">
          <h2 className="GridCategory__title">{title}</h2>
        </div>
        <div className="GridCategory__items">
          {categories.map((category) => (
            <CardCategory category={category} key={category.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridCategory;