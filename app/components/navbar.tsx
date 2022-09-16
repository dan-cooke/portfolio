import { Link } from "@remix-run/react";
import { BrandGithub, BrandStackoverflow } from "tabler-icons-react";

export const Navbar = () => {
  return (
    <nav className="flex h-max w-full place-content-between bg-[#232323] px-4 align-middle drop-shadow-sm">
      <Link to="/" className="text-yellow-300">
        Resume
      </Link>
      <div className="flex p-2" style={{ color: "white" }}>
        <BrandGithub className="hover:cursor-pointer" />
        <BrandStackoverflow className="hover:cursor-pointer" />
      </div>
    </nav>
  );
};
