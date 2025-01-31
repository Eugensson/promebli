import { statItems } from "@/constants";

export const StatList = () => {
  return (
    <section className="p-4 md:p-8 xl:p-12 bg-accent rounded-[20px]">
      <ul className="flex flex-wrap gap-y-8">
        {statItems.map(({ value, text }) => (
          <li
            className="min-h-[70px] w-1/2 flex flex-col justify-center odd:border-r xl:flex-1 xl:odd:border-r xl:even:border-r xl:even:last:border-none"
            key={value}
          >
            <span className="text-2xl font-semibold xl:text-4xl">{value}</span>
            <span className="text-xs sm:text-sm md:text-base font-light max-w-[110px] mx-auto xl:text-xl">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
