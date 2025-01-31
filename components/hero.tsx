import { StatList } from "@/components/stat-list";

export const Hero = () => {
  return (
    <section className="h-[850px] w-full bg-hero bg-cover bg-no-repeat bg-right lg:bg-center text-white py-40 relative mb-12 lg:mb-28">
      <div className="container text-center">
        <h1 className="mx-auto text-2xl font-semibold mb-8 lg:text-6xl lg:leading-tight lg:max-w-[70vw]">
          Створюємо меблі, що наповнюють дім комфортом
        </h1>
        <p className="mx-auto mb-8 lg:mb-16 max-w-[627px] lg:text-xl font-semibold">
          Дизайн, якість і функціональність — усе для вашого ідеального
          простору. Обирайте з широкого асортименту або замовляйте індивідуальне
          виготовлення.
        </p>
        <button
          type="button"
          className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-9 lg:px-20 py-3 lg:py-4 mb-20 lg:mb-40 text-xl rounded-md backdrop-blur-md transition-colors"
        >
          Купуйте зараз
        </button>
        <StatList />
      </div>
    </section>
  );
};
