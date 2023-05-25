import {
  BsFillCircleFill,
  BsFillCloudUploadFill,
  BsFillImageFill,
  BsFillClipboard2MinusFill,
  BsFileEarmarkPdfFill,
} from "react-icons/bs";
import { AiOutlineDown, AiTwotoneSave } from "react-icons/ai";
import { useState } from "react";
import UserData from "./UserData";
import Agentresults from "./Agentresults";
import { useDispatch, useSelector } from "react-redux";
import { saveChat } from "../features/slices/statesSlice";

const Window = () => {
  const dispatch = useDispatch();
  const [showDropMenu, setShowDropMenu] = useState(false);
  const { agentResult } = useSelector((state) => state.agent);
  console.log("from windowww", agentResult);

  const handleDropMenu = () => {
    setShowDropMenu((prev) => !prev);
  };

  const handleSaving = () => {
    dispatch(saveChat(agentResult[0]));
  };

  return (
    <div className="border-translucent w-full flex-col rounded-2xl border-2 border-white/20 bg-zinc-900 text-white shadow-2xl drop-shadow-lg xl:flex flex">
      <div className="flex items-center gap-1 overflow-visible rounded-t-3xl p-3">
        <ul className="list-none flex gap-1 text-xs">
          <li>
            <BsFillCircleFill className="text-red-500" />
          </li>
          <li>
            <BsFillCircleFill className="text-yellow-500" />
          </li>
          <li>
            <BsFillCircleFill className="text-green-500" />
          </li>
        </ul>
        <div className="flex-grow font-mono text-sm font-bold sm:ml-2">
          <span className="hidden md:inline text-gray-500">AgentGPT</span>
          <span className="text-gray-300"> (2 / 10 runs)</span>
        </div>
        <button
          onClick={handleSaving}
          className={`${
            agentResult.length
              ? "relative flex h-8 cursor-pointer items-center gap-2 bg-[#3a3a3a] p-2 font-mono text-sm font-bold transition-all hover:bg-white/10 rounded-lg border-[1px] border-white/30 hover:border-[#1E88E5]/40 hover:bg-[#6b6b6b]"
              : "hidden"
          }`}
        >
          <AiTwotoneSave />
          Save
          <span className="absolute right-[-4px] top-[-2px] flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400  opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400 "></span>
          </span>
        </button>
        <div className="relative">
          <button
            onClick={handleDropMenu}
            className="bg-[#3a3a3a] text-left py-1 px-2 text-sm font-mono rounded-lg text-gray/50 border-[2px] border-white/30 sm:py-1 hover:border-[#1E88E5]/40 hover:bg-[#6b6b6b] focus-visible:outline-none focus:border-[#1E88E5] font-bold flex items-center gap-1"
          >
            <BsFillCloudUploadFill className="mt-1" />
            <span className="me-1">Export</span>
            <AiOutlineDown />
          </button>
          <ul
            className={`${
              showDropMenu ? "flex " : "hidden"
            } absolute list-none flex-col items-center transition-all right-0 top-full z-20 mt-1 max-h-48 w-full overflow-hidden rounded-xl border-[2px] border-white/10 bg-[#3a3a3a] tracking-wider shadow-xl outline-0`}
          >
            <li className="flex gap-2 items-center justify-start text-sm  px-2 w-full py-[1px] md:py-0.5 cursor-pointer p-1 hover:bg-white/10">
              <BsFillImageFill />
              <span>Image</span>
            </li>
            <li className="flex gap-2 items-center justify-start text-sm  px-2 w-full py-[1px] md:py-0.5 cursor-pointer p-1 hover:bg-white/10 ">
              <BsFillClipboard2MinusFill />
              <span>Copy</span>
            </li>
            <li className="flex gap-2 items-center justify-start text-sm  px-2 w-full py-[1px] md:py-0.5 cursor-pointer p-1 hover:bg-white/10">
              <BsFileEarmarkPdfFill />
              <span>PDF</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="overflow-y-auto overflow-x-hidden h-[14em] mb-2 mr-2">
        {agentResult.length ? <Agentresults /> : <UserData />}
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="m-1 flex w-36 items-center justify-center gap-2 rounded-lg border-[2px] border-white/20 bg-zinc-700 px-2 py-1">
          <p className="font-mono text-sm">Web Search</p>
          <button
            type="button"
            role="switch"
            value="on"
            aria-checked
            className="group radix-state-checked:bg-sky-600 radix-state-unchecked:bg-zinc-500 dark:radix-state-unchecked:bg-zinc-800 relative inline-flex h-4 w-7 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75 cursor-pointer "
          >
            <span className="group-radix-state-checked:translate-x-3 group-radix-state-unchecked:translate-x-0 pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"></span>
          </button>
        </div>

        <div className="m-1 flex w-36 items-center justify-center gap-2 rounded-lg border-[2px] border-white/20 bg-zinc-700 px-2 py-1">
          <p className="font-mono text-sm">Pause Mode</p>
          <button
            type="button"
            role="switch"
            value="on"
            aria-checked
            className="group radix-state-checked:bg-sky-600 radix-state-unchecked:bg-zinc-500 dark:radix-state-unchecked:bg-zinc-800 relative inline-flex h-4 w-7 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75 cursor-pointer "
          >
            <span className="group-radix-state-checked:translate-x-3 group-radix-state-unchecked:translate-x-0 pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Window;
