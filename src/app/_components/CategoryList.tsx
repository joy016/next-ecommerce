import Link from 'next/link';
import Image from 'next/image';
import { wixClientServer } from '@/lib/wixClientServer';

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="grid grid-flow-col gap-4">
        {categories.items.map((category) => (
          <Link
            href={`/list?cat=${category.slug}`}
            className="w-full flex flex-col gap-4"
            key={category._id}
          >
            <div className="w-60 h-80 relative ">
              <Image
                src={category.media?.mainMedia?.image?.url!}
                fill
                sizes="25vw"
                alt=""
                className="object-cover rounded-md"
              />
            </div>
            <h4 className="text-sm font-semibold">{category.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
