import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-100px] bg-transparent flex justify-between items-center px-10 md:px-28">
      <div className="flex flex-row gap-3 items-center">
       <div className="relative">
        <Image
          src="/logoo.png"
          alt="logo"
          width={200}              
          height={140}             
          className= "m-10 pr-16 pl-18 rounded-full object-cover "
          // layout="fixed"
          />         
         </div>
        {/* <h1 className="text-white h-8 pr-14 pl-8 text-[25px] font-extrabold">Areeba.</h1> */}
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={2}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
