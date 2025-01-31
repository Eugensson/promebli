"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export type NewItem = {
  title: string;
  image: string;
};

interface NewItemsSliderProps {
  items: NewItem[];
}

export const NewItemsSlider = ({ items }: NewItemsSliderProps) => {
  return (
    <Swiper
      grabCursor
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {items.map(({ title, image }) => (
        <SwiperSlide className="max-w-[265px]" key={title}>
          <div className="relative ">
            <Image
              src={image}
              alt={`${title} image`}
              width={400}
              height={400}
              className="object-cover w-[265px] h-[400px]"
            />
            <p className="absolute bottom-5 w-full text-center text-lg lg:text-2xl font-medium text-white capitalize">
              {title}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
