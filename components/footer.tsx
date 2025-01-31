import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="section bg-primary text-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-gray-700/75 pb-7 lg:pb-14 mb-14">
          <Logo className="mb-6 lg:mb-0" />
          <Socials />
        </div>
        <p className="text-center">
          &copy; ProМеблі 2025 - Усі права захищені.
        </p>
      </div>
    </footer>
  );
};
