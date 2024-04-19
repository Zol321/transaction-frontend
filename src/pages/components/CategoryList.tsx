import EyeSvg from "../icons/EyeSvg";

const CategoryList = ({ category }: { category: string }) => {
  return <>
  <div className="Types">
    <EyeSvg/>
    <div className="TypesText">
    {category}
    </div>
  </div>
   </>
};

export default CategoryList