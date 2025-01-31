import Image from "next/image";

export const FeaturesSecond = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:gap-x-24">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="title">
              Неперевершений стиль та бездоганна якість у кожному виробі
            </h2>
            <br />
            <p className="subtitle">
              Найкращі меблі від вітчизняного виробника.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/feature-1.jpg"
              alt="feature-1"
              width={800}
              height={800}
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
