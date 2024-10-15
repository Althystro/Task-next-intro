import Image from "next/image";
import cookieShop from "./assets/cookie_shop.jpg";
import ProductItems from "./components/ProductItems";
import Products from "./products";

const productsName = Products.map((product) => product.name);
const productsPrice = Products.map((product) => product.price);
const productsImage = Products.map((product) => product.image);

const cookieslist = Products.map((product) => (
  <div class="p-10 flex flex-col justify-center items-center">
    <Image src={product.image} alt="Logo" width={100} height={100} />
    <h1 class=" font-bold ">{product.name}</h1>
    <h1 class=" font-bold ">{product.price}</h1>
  </div>
));

export default function Home() {
  return (
    <div>
      <ProductItems />

      <div class="flex flex-row justify-center items-center	">
        <Image src={cookieShop} alt="Logo" width={500} height={400} />
      </div>
      <div class="flex flex-row justify-center items-center w-100 h-100 	">
        {cookieslist}

        {/* <div class="p-10 flex flex-col justify-center items-center">
          <Image src={productsImage[0]} alt="Logo" width={100} height={100} />
          <h1 class=" font-bold ">{productsName[0]}</h1>
          <h1 class=" font-bold ">{productsPrice[0]}</h1>
        </div>
        <div class="p-10 flex flex-col justify-center items-center">
          <Image src={productsImage[1]} alt="Logo" width={100} height={100} />
          <h1 class=" font-bold ">{productsName[1]}</h1>
          <h1 class=" font-bold ">{productsPrice[1]}</h1>
        </div>
        <div class="p-10 flex flex-col justify-center items-center">
          <Image src={productsImage[2]} alt="Logo" width={100} height={100} />
          <h1 class=" font-bold ">{productsName[2]}</h1>
          <h1 class=" font-bold ">{productsPrice[2]}</h1>
        </div> */}
        {/* <div class="p-10 flex flex-col justify-center items-center">
          <Image src={cookieShop} alt="Logo" width={100} height={100} />
          <h1 class=" font-bold ">Blue Cookie</h1>
          <h1 class=" font-bold ">20KD</h1>
        </div> */}
      </div>
    </div>
  );
}
