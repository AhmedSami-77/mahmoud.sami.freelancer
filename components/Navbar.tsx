import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[80px] md:h-[100px] bg-transparent flex flex-col md:flex-row justify-between items-center px-5 md:px-10 lg:px-20">
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-white text-[20px] md:text-[25px] font-semibold">
          Mahmoud Sami{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Designer{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mt-3 md:mt-0">
        {Socials.map((social) => (
          <a href={social.link} key={social.name}>
            <Image src={social.src} alt={social.name} width={28} height={28} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
