import {
  CART_HEADER_LABEL,
  CHECKOUT_BTN,
  EMPTY_CART_LABEL,
  SHIPPING_REMINDER_LABEL,
  SUB_TOTAL_LABEL,
  VIEW_CART_BTN,
} from '../../../constants/Navbar';
import Image from 'next/image';

const CartModal = () => {
  const items = true;

  return (
    <div className="w-max absolute top-12 right-0 rounded-md bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 z-20 gap-8 flex flex-col">
      <h2 className="text-xl">{CART_HEADER_LABEL}</h2>
      {!items ? (
        <div>{EMPTY_CART_LABEL}</div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <Image
              src="/product.png"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />

            <div className="flex flex-col justify-between w-full gap-12">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">Product name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                    {/* {item.quantity && item.quantity > 1 && (
                <div className="text-xs text-green-500">{item.quantity} x </div>
              )} */}
                    $49
                  </div>
                </div>
                <div className="text-gray-500">available</div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty 1</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between font-semibold text-xl">
            <span>{SUB_TOTAL_LABEL}</span>
            <span>$ 40.5</span>
          </div>
          <p className="text-gray-500">{SHIPPING_REMINDER_LABEL}</p>
          <div className="flex justify-between font-semibold">
            <button className="border-2  border-gray-300  rounded-md py-4 px-6">
              {VIEW_CART_BTN}
            </button>
            <button className="bg-black text-white py-4 px-6 rounded-md">
              {CHECKOUT_BTN}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
