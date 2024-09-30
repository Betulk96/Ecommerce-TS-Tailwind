import Banner from "./component/home/Banner";
import Category from "./component/home/Category";
import Products from "./component/home/Products";

export default function Home() {
  return (
    <div>
      <Category />
      <Banner />
      <Products />
    </div>
  );
}
