import {
  CATEGORY_PRODUCT_LABEL,
  FEATURED_PRODUCT_LABEL,
  NEW_PRODUCTS_LABEL,
} from '../../constants/homepage';
import CategoryList from './_components/CategoryList';
import NewProducts from './_components/NewProducts';
import ProductList from './_components/ProductList';
import Slider from './_components/Slider';

const HomePage = () => {
  // const wixClient = useContext(WixClientContext);
  // useEffect(() => {
  //   const getProduct = async () => {
  //     const response = await wixClient.products.queryProducts().find();
  //     console.log('wixClient data', response);
  //   };
  //   getProduct();
  // }, [wixClient]);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40">
        <h1 className="text-xl">{FEATURED_PRODUCT_LABEL}</h1>
        <ProductList
          limit={4}
          categoryId={process.env.WIX_CLIENT_FEATURED_ID!}
        />
      </div>
      <div>
        <h1 className="text-xl mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 mb-8">
          {CATEGORY_PRODUCT_LABEL}
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 mb-24">
        <h1 className="text-xl mb-8">{NEW_PRODUCTS_LABEL}</h1>
        <NewProducts />
      </div>
    </div>
  );
};

export default HomePage;
