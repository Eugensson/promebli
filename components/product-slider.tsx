"use client";

import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type Product = {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
};

export type ProductList = {
  productList: Product[];
};

interface ProductSliderProps {
  items: {
    pages: ProductList[];
  };
}

export const ProductSlider = ({ items }: ProductSliderProps) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      pagination={{ clickable: true }}
      className="productSlider min-h-[1300px]"
    >
      {items.pages.map((item, index) => (
        <SwiperSlide key={index}>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 lg:gap-8">
            {item.productList.map((product: Product, index: number) => (
              <li
                key={index}
                className="w-full max-w-[290px] h-[380px] text-left"
              >
                <div className="relative border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] overflow-hidden flex items-center justify-center mb-4 transition-all">
                  <Image
                    src={product.image}
                    alt={`${product.title} image`}
                    width={200}
                    height={200}
                  />
                  <div className="absolute bottom-4 right-5 bg-gray-200 hover:bg-gray-300 rounded-full size-8 flex justify-center items-center cursor-pointer">
                    <HiPlus size={20} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold lg:text-lg line-clamp-2 mb-2">
                  {product.title}
                </h3>
                <div className="flex items-center gap-x-3">
                  <p>&#8372;{product.price}</p>
                  <p className="text-[15px] text-grey line-through">
                    &#8372;{product.oldPrice}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
