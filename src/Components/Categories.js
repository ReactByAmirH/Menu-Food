import React, { useState } from "react";

const Categories = ({ categories, filterMenus }) => {
  const [mainCategory, setMainCategory] = useState("all");

  return (
    <div className="button-container">
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          className={
            category === mainCategory ? "filter-button highlight" : "filter-button"
          }
          onClick={() => {
            setMainCategory(category)
            filterMenus(category)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
