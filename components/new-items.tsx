import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import { NewItemsSlider } from "@/components/new-items-slider";

import { newInStore } from "@/constants";

export const NewItems = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-72 flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title lg:mt-8 lg:mb-24">Нові надходження</h2>
            <p className="lg:mb-12">
              Отримайте найновіші товари за акційними цінами
            </p>
            <Link
              href="#"
              className="hidden lg:flex items-center gap-x-2 border-primary font-medium hover:border-b transition-all"
            >
              Переглянути усі
              <IoIosArrowRoundForward size={20} />
            </Link>
          </div>
          <div className="lg:max-w-[800px] xl:max-w-[900px] lg:absolute lg:right-10">
            <NewItemsSlider items={newInStore} />
          </div>
        </div>
      </div>
    </section>
  );
};
