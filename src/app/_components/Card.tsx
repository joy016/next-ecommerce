import Link from 'next/link';
import Image from 'next/image';
import { CardTypes } from '../../../types/card';
import { ADD_TO_CART_BTN } from '../../../constants/homepage';

const Card = ({
  productUrl,
  secondProductUrl,
  productName,
  productPrice,
  productDesc,
}: CardTypes) => {
  return (
    <Link href="/" className="w-full flex flex-col gap-4">
      <div className="relative w-full h-80">
        <Image
          src={productUrl}
          fill
          sizes="25vw"
          alt=""
          className="absolute object-cover rounder-md hover:opacity-0 transition-opacity easy duration-500 z-10"
        />
        <Image
          src={secondProductUrl}
          fill
          sizes="25vw"
          alt=""
          className="absolute object-cover rounder-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">{productName}</span>
        <span className="font-semibold">{productPrice}</span>
      </div>
      <div className="text-gray-500 text-xs">{productDesc}</div>
      <button className="rounded-2xl ring-1 ring-pinkColor text-pinkColor w-max py-2 px-4 text-xs hover:bg-pinkColor hover:text-white">
        {ADD_TO_CART_BTN}
      </button>
    </Link>
  );
};

export default Card;
