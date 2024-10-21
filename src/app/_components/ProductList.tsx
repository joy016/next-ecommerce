import { wixClientServer } from '@/lib/wixClientServer';
import Card from './Card';
import { products } from '@wix/stores';
const ProductList = async ({
  limit,
  categoryId,
}: {
  limit: number;
  categoryId: string;
}) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq('collectionIds', categoryId)
    .limit(limit)
    .find();

  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {res.items.map((product: products.Product) => (
        <Card
          key={product._id}
          uniqueKey={product._id!}
          link={`/single-product/${product.slug}`}
          productUrl={product.media?.mainMedia?.image?.url! || '/product.png'}
          secondProductUrl={
            product.media?.items?.[1]?.image?.url ?? '/product.png'
          }
          productName={product.name!}
          productPrice={product.price?.formatted?.price!}
          productDesc={product.description!}
        />
      ))}
    </div>
  );
};

export default ProductList;
