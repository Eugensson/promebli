import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Features } from "@/components/features";
import { NewItems } from "@/components/new-items";
import { Newsletter } from "@/components/newsletter";
import { Testimonial } from "@/components/testimonial";
import { ProductList } from "@/components/product-list";
import { FeaturesSecond } from "@/components/features-second";

const Home = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] bg-white">
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <ProductList />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
