import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <h2 className="text-lg font-medium">
        swetan<span className="text-slate-400">shu</span>
      </h2>
      <a href="https://github.com/SwetanshuSingh" target="_blank">
        <Github
          className="text-gray-400 cursor-pointer hover:text-inherit"
          size="18px"
        />
      </a>
    </nav>
  );
};

export default Navbar;
