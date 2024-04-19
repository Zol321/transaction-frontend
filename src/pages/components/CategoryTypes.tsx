import React from "react";
import CategoryList  from "./CategoryList";

export const CategoryTypes: React.FC = () => {
  const categories = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportatin",
    "Vechile",
    "Life & Entertaiment",
    "Communication, Pc",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
  ];
  return (
    <div>
      {categories.map((category, index) => (
        <CategoryList key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryTypes;
