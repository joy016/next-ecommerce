import Card from './Card';
const ProductList = () => {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      <Card
        productUrl="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg"
        secondProductUrl="https://images.pexels.com/photos/28259757/pexels-photo-28259757/free-photo-of-cozy-children-s-striped-sweater-on-hanger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        productName="Digital Incense"
        productPrice="$45"
        productDesc="Perfect mint green, Organic material"
      />
      <Card
        productUrl="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg"
        secondProductUrl="https://images.pexels.com/photos/28259757/pexels-photo-28259757/free-photo-of-cozy-children-s-striped-sweater-on-hanger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        productName="Digital Incense"
        productPrice="$45"
        productDesc="Perfect mint green, Organic material"
      />
      <Card
        productUrl="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg"
        secondProductUrl="https://images.pexels.com/photos/28259757/pexels-photo-28259757/free-photo-of-cozy-children-s-striped-sweater-on-hanger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        productName="Digital Incense"
        productPrice="$45"
        productDesc="Perfect mint green, Organic material"
      />
      <Card
        productUrl="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg"
        secondProductUrl="https://images.pexels.com/photos/28259757/pexels-photo-28259757/free-photo-of-cozy-children-s-striped-sweater-on-hanger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        productName="Digital Incense"
        productPrice="$45"
        productDesc="Perfect mint green, Organic material"
      />
    </div>
  );
};

export default ProductList;
