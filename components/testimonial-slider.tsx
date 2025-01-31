"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export type Testimonial = {
  avatar: string;
  name: string;
  occupation: string;
  message: string;
};

interface TestimonialSliderProps {
  items: Testimonial[];
}

export const TestimonialSlider = ({ items }: TestimonialSliderProps) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      navigation
      autoplay={{ delay: 5000 }}
      className="testimonialSlider"
    >
      {items.map(({ avatar, name, occupation, message }) => (
        <SwiperSlide key={name}>
          <div className="flex flex-col min-h-[260px] lg:min-h-[320px]">
            <div className="flex items-center gap-x-5 mb-4 xl:mb-8">
              <Image
                src={avatar}
                alt={`${name} image`}
                width={75}
                height={75}
                className="object-cover aspect-square rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-500">{occupation}</p>
              </div>
            </div>
            <p className="md:text-lg max-w-[570px]">{message}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
