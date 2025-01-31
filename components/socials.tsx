import Link from "next/link";

import { socialList } from "@/constants";

export const Socials = () => {
  return (
    <ul className="flex items-center justify-center gap-x-4">
      {socialList.map(({ label, icon: Icon, href }) => (
        <li
          key={label}
          aria-label={`${label} link`}
          className="flex items-center justify-center size-12 text-2xl bg-gray-700 hover:bg-accent transition-colors rounded-full"
        >
          <Link href={href} target="_blank" rel="noreferrer noopener">
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};
