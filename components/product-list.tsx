import { ProductSlider } from "@/components/product-slider";

import { products } from "@/constants";

export const ProductList = () => {
  return (
    <section className="section text-center">
      <div className="container">
        <div>
          <h2 className="title">Усі товари</h2>
          <p className="subtitle max-w-[639px] mx-auto mb-12 lg:mb-[70px]">
            Товари, які ми надаємо лише для Вас як наш сервіс, обираються з
            найкращих товарів із якістю номер 1 у світі
          </p>
        </div>
        <div>
          <ProductSlider items={products} />
        </div>
      </div>
    </section>
  );
};
