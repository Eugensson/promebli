import Link from "next/link";

import { navLinks } from "@/constants";

export const NavMobile = () => {
  return (
    <nav className="w-full h-full shadow-2xl bg-white">
      <ul className="h-full p-4 flex flex-col justify-center items-center gap-y-6 text-center">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className="capitalize text-xl font-medium">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
