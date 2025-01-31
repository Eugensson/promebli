import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={twMerge(
        "text-4xl font-bold tracking-wide text-white",
        className
      )}
    >
      Pro<span className="text-orange-500">Меблі</span>
    </Link>
  );
};
