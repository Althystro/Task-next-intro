import Image from "next/image";
import cookieShop from "./assets/cookie_shop.jpg";
import ProductItems from "./components/ProductItems";
export default function Home() {
  return (
    <div class="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ProductItems />

      <div class="bg-black">
        <Image src={cookieShop} alt="Logo" width={500} height={500} />
      </div>
    </div>
  );
}
