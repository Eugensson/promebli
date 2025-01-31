import Image from "next/image";

import { TestimonialSlider } from "@/components/testimonial-slider";

import { testimonialList } from "@/constants";

export const Testimonial = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-10">
          <div className="lg:max-w-[50%]">
            <h2 className="title mb-9">Що люди говорять про нас</h2>
            <TestimonialSlider items={testimonialList} />
          </div>
          <div className="order-1 lg:my-auto">
            <Image
              src="/images/testimonial.jpg"
              alt="testimonial"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
