import { CART_BTN, QUANTITY_LABEL } from '../../../constants/singleproduct';
import { FaMinus } from 'react-icons/fa';

const AddOrder = () => {
  return (
    <div>
      <span className="font-bold text-sm">{QUANTITY_LABEL}</span>
      <div className="flex justify-between items-center mt-2">
        <div>
          <div>
            <FaMinus />
            
          </div>
          <p className="text-xs">
            Variant is out of stock. <br />
            Please choose another option
          </p>
        </div>
        <button className="bg-pinkColor text-white px-4 py-2 rounded-full text-sm">
          {CART_BTN}
        </button>
      </div>
    </div>
  );
};

export default AddOrder;
