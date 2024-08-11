import { Menu, MenuButton } from "@headlessui/react";
import React from "react";
import { FaRegUser } from "react-icons/fa";
export default function Auth() {
  const handleRediractToWikiMedia = () => {};

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="w-10 h-10 2xl:w-12 2xl:h-12 flex items-center border-2 border-icon-border-color justify-center rounded-full bg-primary-color text-white p-2 hover:bg--primary-color active:bg--primary-color focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 ease-in-out">
          <FaRegUser className="text-xl 2xl:text-2xl text-black" />
        </MenuButton>
      </div>
    </Menu>
  );
}