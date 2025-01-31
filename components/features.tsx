import Image from "next/image";

import { featureList } from "@/constants";

export const Features = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:gap-x-24">
          <div className="flex-1 order-1 lg:-order-1">
            <Image
              src="/images/feature-2.jpg"
              alt="feature-1"
              width={800}
              height={800}
              className="object-cover h-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">Ми зробимо Вашу оселю більш естетичною</h2>
            <p className="subtitle">
              Обирайте сучасний дизайн і якісні матеріали для створення
              гармонійного інтер&apos;єру.
            </p>
            <ul className="mb-6 lg:mb-0 flex flex-col gap-4">
              {featureList.map(({ icon: Icon, title, subtitle }) => (
                <li key={title} className="flex gap-x-4">
                  <Icon className="min-w-5 min-h-5" />
                  <div>
                    <h3 className="text-base lg:text-xl font-semibold mb-3">
                      {title}
                    </h3>
                    <p>{subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
