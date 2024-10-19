import React from "react";
import Image from "next/image";
import Products from "../products";

// Task 5
// function ProductItem() {
//   const cookieslist = Products.map((product) => (
//     <div class="p-10 flex flex-col justify-center items-center">
//       <Image src={product.image} alt="Logo" width={100} height={100} />
//       <h1 class=" font-bold ">{product.name}</h1>
//       <h1 class=" font-bold ">{product.price}</h1>
//     </div>
//   ));
//   return <>{cookieslist}</>;
// }
function ProductItem({ name, price, image }) {
  return (
    <div class="p-10 flex flex-col justify-center items-center">
      <Image src={image} alt="Logo" width={100} height={100} />
      <h1 class=" font-bold ">{name}</h1>
      <h1 class=" font-bold ">{price}</h1>
    </div>
  );
}

// const Cookieslist = Products.map((product) => (
//   <div class="p-10 flex flex-col justify-center items-center">
//     <Image src={product.image} alt="Logo" width={100} height={100} />
//     <h1 class=" font-bold ">{product.name}</h1>
//     <h1 class=" font-bold ">{product.price}</h1>
//   </div>
// ));

export default ProductItem;
