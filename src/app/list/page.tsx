import Image from 'next/image';
import Card from '../_components/Card';
import Filter from '../_components/Filter';

const ListPage = ({ searchParams }: { searchParams: any }) => {
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
        <h1 className="text-2xl font-semibold mt-12">All Products for You!</h1>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <Card
            uniqueKey="1"
            link={`/single-product/${1}`}
            productUrl="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg"
            secondProductUrl="https://images.pexels.com/photos/28259757/pexels-photo-28259757/free-photo-of-cozy-children-s-striped-sweater-on-hanger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            productName="Digital Incense"
            productPrice="$45"
            productDesc="Perfect mint green, Organic material"
          />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
