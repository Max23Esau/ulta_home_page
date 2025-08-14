import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard"

import "./CategoryGrid.css"


const CategoryGrid = ({title, bgColor}) => {

  const [categories, setcategories] = useState([]);

    useEffect(() => {
    fetch("../../../public/data/listCategories.json")
      .then((res) => res.json())
      .then((data) => setcategories(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="categoryGrid" style={{backgroundColor: bgColor }}>
      <div className="categoryGrid__container">
        <div className="categoryGrid__header">
          <h2 className="categoryGrid__title">{title}</h2>
        </div>
        <div className="categoryGrid__items">
          {categories.map((category) => (
            <CategoryCard category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;