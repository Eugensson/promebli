export const Newsletter = () => {
  return (
    <section className="section bg-newsletter min-h-[490px]">
      <div className="container flex justify-center lg:justify-end">
        <div className="w-full max-w-[558px] text-center lg:text-left text-white">
          <h2 className="text-4xl font-semibold mx-auto lg:mx-0 max-w-[350px] mb-5 leading-normal">
            Отримайте більше знижок на замовлення
          </h2>
          <p className="text-xl font-light mb-10">
            Приєднуйтесь до нашого списку розсилки
          </p>
          <form className="flex flex-col lg:flex-row gap-5">
            <input
              type="email"
              placeholder="Ваша електронна адреса"
              className="w-full h-[60px] px-6 outline-none text-gray-600 placeholder:text-gray-400 rounded-lg lg:flex-1"
            />
            <button
              type="submit"
              className="h-[60px] px-7 bg-primary hover:bg-slate-900 transition-colors rounded-lg text-xl font-medium"
            >
              Підписатися
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
