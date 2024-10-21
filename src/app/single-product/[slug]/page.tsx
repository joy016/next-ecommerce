import AddOrder from '@/app/_components/AddOrder';
import ProductColor from '@/app/_components/ProductColor';
import ProductImages from '@/app/_components/ProductImages';
import ProductSize from '@/app/_components/ProductSize';

const SinglePage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 ">
      {/* Right content */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* Left content */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <h1 className="font-semibold text-2xl">Classic Tote Bag</h1>

        <p className="text-xs md:text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a
        </p>
        <span className="font-semibold text-xl">$18</span>
        <ProductColor />
        <ProductSize />
        <AddOrder />
      </div>
    </div>
  );
};

export default SinglePage;
