import { CART_BTN, QUANTITY_LABEL } from '../../../constants/singleproduct';
import { FaMinus, FaPlus } from 'react-icons/fa';

const AddOrder = ({ stockStatus }: { stockStatus: boolean }) => {
  return (
    <div>
      <span className="font-bold text-sm">{QUANTITY_LABEL}</span>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-3">
          <div className="flex items-center gap-4 bg-gray-300 py-2 px-3 rounded-full text-xs">
            <FaMinus />
            <span>1</span>
            <FaPlus />
          </div>
          {!stockStatus && (
            <p className="text-xs">
              Variant is out of stock. <br />
              Please choose another option
            </p>
          )}
        </div>
        <button
          className={` ${
            stockStatus === false ? 'bg-pink-200' : 'bg-pinkColor'
          } text-white px-4 py-2 rounded-full text-sm`}
          disabled={!stockStatus}
        >
          {CART_BTN}
        </button>
      </div>
    </div>
  );
};

export default AddOrder;
