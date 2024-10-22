'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ProductImageType } from '../../../types/product';



const ProductImages = ({
  productImages,
}: {
  productImages: ProductImageType[];
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={productImages[imageIndex].image.url}
          alt=""
          fill
          sizes="50vw"
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex gap-6">
        {productImages.map((item, index) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={index}
            onClick={() => setImageIndex(index)}
          >
            <Image
              src={item.image.url!}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
