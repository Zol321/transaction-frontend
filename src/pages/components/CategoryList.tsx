import EyeSvg from "../icons/EyeSvg";

export const CategoryList = ({ category }: { category: string }) => {
  return <>
  <div className="Types">
    <EyeSvg/>
    <div className="TypesText">
    {category}
    </div>
  </div>
   </>
};
