import { COLOR_LABEL } from '../../../constants/singleproduct';

const ProductColor = () => {
  return (
    <>
      <span className="font-bold text-sm">{COLOR_LABEL}</span>
      <ul className="flex gap-2 items-center">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 h-8 rounded-full ring-1  bg-violet-400 relative"></li>
        <li className="w-8 h-8 rounded-full ring-1 bg-black relative"></li>
      </ul>
    </>
  );
};

export default ProductColor;
