import React from "react";
import { NAVBAR_LINK } from "../static";
import dd from "../assets/dd.png";

const Header = () => {
  const navbar_link = NAVBAR_LINK.map((link) => (
    <li key={link.id}>
      <a
        href="#"
        className="text-xl font-serif text-slate-950 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      >
        <span>{link.name}</span>
      </a>
    </li>
  ));

  return (
    <div className="h-24 mb-20">
      <div className="h-full container max-w-[1280px] mx-auto flex justify-between items-center">
        <div>
          <img src={dd} alt="Logo" className="w-20 h-20 object-contain" />
        </div>
        <ul className="navbar flex gap-10">{navbar_link}</ul>
      </div>
    </div>
  );
};

export default Header;
