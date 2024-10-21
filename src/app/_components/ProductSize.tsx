import { SIZE_LABEL } from '../../../constants/singleproduct';

const ProductSize = () => {
  return (
    <div>
      <span className="font-bold text-sm">{SIZE_LABEL}</span>
      <div className="flex gap-2 mt-3">
        <button className="text-pinkColor text-sm ring-1 ring-pinkColor px-4 py-1 rounded-md hover:bg-pinkColor hover:text-white">
          Small
        </button>
        <button className="text-pinkColor text-sm ring-1 ring-pinkColor px-4 py-1 rounded-md hover:bg-pinkColor hover:text-white">
          Medium
        </button>
        <button className="text-pinkColor text-sm ring-1 ring-pinkColor px-4 py-1 rounded-md hover:bg-pinkColor hover:text-white">
          Large
        </button>
      </div>
    </div>
  );
};

export default ProductSize;
