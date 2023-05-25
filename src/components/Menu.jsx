import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaSignOutAlt,
  FaHeart,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaRobot,
} from "react-icons/fa";

import { MdOutlineHelp, MdSettings } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const { savedChats } = useSelector((state) => state.agent);

  const triggerMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div
      className={`${
        openMenu
          ? "lg:translate-x-0 translate-x-[-12%]  lg:sticky z-30 m-0 flex h-screen w-72 flex-col justify-between bg-zinc-900 p-3 font-mono text-white shadow-3xl transition-all fixed top-0"
          : "lg:-translate-x-full translate-x-[-114%] z-30 m-0 flex h-screen w-72 flex-col justify-between bg-zinc-900 p-3 font-mono text-white shadow-3xl transition-all fixed top-0"
      }  `}
    >
      <div className="flex flex-col gap-1 overflow-hidden">
        <div className="flex justify-center gap-2 mb-2">
          <p className="font-bold">My Agents</p>
          <button
            onClick={triggerMenu}
            className={`${
              openMenu
                ? "-translate-x-2 absolute right-0 top-2 z-40 rounded-md bg-zinc-900 p-2 text-white transition-all hover:bg-zinc-700"
                : "translate-x-12 border-2 border-white/20 absolute right-0 top-2 z-40 rounded-md bg-zinc-900 p-2 text-white transition-all hover:bg-zinc-700  "
            }`}
          >
            <GiHamburgerMenu className="text-md" />
          </button>
        </div>
        <ul className="list-none flex flex-col gap-2 overflow-auto">
          {savedChats?.length > 0 ? (
            savedChats?.map((chat, index) => (
              <li key={index}>
                <NavLink
                  className="flex cursor-pointer flex-row items-center rounded-md p-2 hover:bg-white/5 w-full"
                  to={`/chat/${index}`}
                >
                  <FaRobot />
                  <span className="ml-4">{Object.keys(chat)}</span>
                </NavLink>
              </li>
            ))
          ) : (
            <li>
              You need to create and save your first agent before anything shows
              up here!
            </li>
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-full relative h-[1px] bg-white opacity-25 my-2" />
        <ul className="list-none flex flex-col gap-1">
          <li className="flex flex-row justify-start items-center cursor-pointer rounded-md p-2 hover:bg-white/5">
            <FaSignOutAlt className="me-3 text-lg" />
            <h3 className="text-md">Sign Out</h3>
          </li>

          <li className="flex flex-row justify-start items-center cursor-pointer rounded-md p-2 hover:bg-white/5">
            <MdOutlineHelp className="me-3 text-lg" />
            <h3 className="text-md">Help</h3>
          </li>

          <li className="flex flex-row justify-start items-center cursor-pointer rounded-md p-2 hover:bg-white/5">
            <FaHeart className="me-3 text-lg" />
            <h3 className="text-md">Support</h3>
          </li>

          <li className="flex flex-row justify-start items-center cursor-pointer rounded-md p-2 hover:bg-white/5">
            <MdSettings className="me-3 text-lg" />
            <h3 className="text-md">Settings</h3>
          </li>
        </ul>
        <div className="w-full relative h-[1px] bg-white opacity-25 my-2" />
        <div className="flex flex-row gap-1">
          <a
            href="https://discord.com/invite/jdSBAnmdnY"
            target="__blank"
            className="flex cursor-pointer flex-row items-center rounded-md p-2 hover:bg-white/5"
          >
            <FaDiscord className="text-3xl hover:text-[#818CF8]" />
          </a>

          <a
            href="https://twitter.com/asimdotshrestha/status/1644883727707959296"
            target="__blank"
            className="flex cursor-pointer flex-row items-center rounded-md p-2 hover:bg-white/5"
          >
            <FaTwitter className="text-3xl hover:text-[#0EA5E9]" />
          </a>

          <a
            href="https://github.com/reworkd/AgentGPT"
            target="__blank"
            className="flex cursor-pointer flex-row items-center rounded-md p-2 hover:bg-white/5"
          >
            <FaGithub className="text-3xl hover:text-[#A855F7]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
