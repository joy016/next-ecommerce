import Image from 'next/image';
import Filter from '../_components/Filter';
import { wixClientServer } from '@/lib/wixClientServer';
import ProductList from '../_components/ProductList';

const ListPage = async ({
  searchParams,
}: {
  searchParams: { cat: string };
}) => {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || 'all-products'
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="hidden bg-pink-50 px-4 md:flex h-64">
        <div className="w-2/3 flex flex-col py-10 pl-32 gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-pinkColor text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>

        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* filter */}
      <Filter />

      {/* bottom */}
      <div>
        <h1 className="text-2xl font-semibold mt-12">
          {`${categories.collection?.name} for You!`}
        </h1>
        <ProductList limit={8} categoryId={categories.collection?._id!} />
      </div>
    </div>
  );
};

export default ListPage;
