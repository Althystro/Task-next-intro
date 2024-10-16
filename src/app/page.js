"use client";

import Image from "next/image";
import cookieShop from "./assets/cookie_shop.jpg";
import ProductItems from "./components/ProductItems";
import Products from "./products";
import { useState } from "react";

const notUsed = Products.map((product) => (
  <ProductItems
    price={product.price}
    name={product.name}
    image={product.image}
  />
));

export default function Home() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div class="flex flex-col justify-center items-center	">
        <h1 class=" font-bold text-7xl">Cookies and Beyond</h1>
        <h4 class=" font-bold text-3xl">When cookie maniacs gather </h4>
      </div>
      <div class="flex flex-col justify-center items-center	">
        <p> the count is {count}</p>
        <button class="" onClick={handleButtonClick}>
          Add +1
        </button>
      </div>
      <div class="flex flex-row justify-center items-center	">
        <Image src={cookieShop} alt="Logo" width={500} height={400} />
      </div>
      <div class="flex flex-row justify-center items-center 	">
        {/* 
        Task 4
        */}
        {notUsed}

        {/* 
        Task 2
        */}

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
