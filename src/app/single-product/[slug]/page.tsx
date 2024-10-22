import AddOrder from '@/app/_components/AddOrder';
import ProductColor from '@/app/_components/ProductColor';
import ProductImages from '@/app/_components/ProductImages';
import ProductSize from '@/app/_components/ProductSize';
import { wixClientServer } from '@/lib/wixClientServer';
import { ProductImageType } from '../../../../types/product';
import {
  PRODUCT_INFO_LABEL,
  RETURN_REFUND_POLICY,
  SHIPPING_INFO,
} from '../../../../constants/singleproduct';

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();
  const product = await wixClient.products
    .queryProducts()
    .eq('slug', params.slug)
    .find();

  const singleProduct = product.items[0];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 ">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages
          productImages={singleProduct.media?.items as ProductImageType[]}
        />
      </div>

      <div className="lg:w-1/2 flex flex-col gap-6">
        <h1 className="font-semibold text-2xl">{singleProduct.name}</h1>

        <p className="text-xs md:text-sm text-gray-500">
          {singleProduct.description}
        </p>
        <span className="font-semibold text-xl">
          {singleProduct.price?.formatted?.price}
        </span>
        <ProductColor />
        <ProductSize />
        <AddOrder stockStatus={singleProduct.stock?.inStock!} />
        <span className="font-bold text-sm">{PRODUCT_INFO_LABEL}</span>
        <p className="text-xs md:text-sm">
          {singleProduct?.additionalInfoSections?.[0].description ||
            'No Product Info Available'}
        </p>
        <span className="font-bold text-sm">{RETURN_REFUND_POLICY}</span>
        <p className="text-xs md:text-sm">
          {singleProduct?.additionalInfoSections?.[1].description ||
            'Not Available'}
        </p>
        <span className="font-bold text-sm">{SHIPPING_INFO}</span>
        <p className="text-xs md:text-sm">
          {singleProduct?.additionalInfoSections?.[2].description ||
            'Not Available'}
        </p>
      </div>
    </div>
  );
};

export default SinglePage;
