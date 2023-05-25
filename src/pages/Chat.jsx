import {
  BsFillCircleFill,
  BsFillCloudUploadFill,
  BsFillImageFill,
  BsFillClipboard2MinusFill,
  BsFileEarmarkPdfFill,
} from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { FaBackspace, FaTrash, FaShare } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Agentresults from "../components/Agentresults";
import { deleteChat } from "../features/slices/statesSlice";

const Chat = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showDropMenu, setShowDropMenu] = useState(false);
  const { savedChats } = useSelector((state) => state.agent);
  console.log("saved chtssasasasasa", Object.keys(savedChats[id])[0]);
  const handleDropMenu = () => {
    setShowDropMenu((prev) => !prev);
  };

  const handleDelete = () => {
    dispatch(deleteChat(id));
    console.log("clicked");
    console.log("alterd", savedChats);
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F] items-center justify-center">
      <div className="min-w-screen min-h-screen flex w-full flex-col items-center justify-center gap-4 p-2 sm:p-4 background">
        <div className="border-translucent w-full flex-col rounded-2xl border-2 border-white/20 bg-zinc-900 text-white shadow-2xl drop-shadow-lg xl:flex min-h-[80vh] md:w-[80%] flex">
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
              <span className="hidden md:inline text-gray-500">
                {Object.keys(savedChats[id])}
              </span>
            </div>

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
          <Agentresults
            chatDetails={savedChats[id][Object.keys(savedChats[id])]}
          />
        </div>
        <div className="flex flex-row gap-2">
          <NavLink
            className="text-gray/50 relative rounded-lg border-[2px] border-white/30 px-4 py-1 font-bold transition-all sm:px-10 sm:py-3 mou cursor-pointer bg-[#1E88E5]/70 text-white/80 hover:border-white/80 hover:bg-[#0084f7] hover:text-white hover:shadow-2xl"
            to="/"
          >
            <div className="flex items-center justify-center">
              <FaBackspace className="mr-2 mt-1" />
              <span>Back</span>
            </div>
          </NavLink>
          <NavLink
            to="/"
            onClick={handleDelete}
            className="text-gray/50 relative rounded-lg border-[2px] border-white/30 px-4 py-1 font-bold transition-all sm:px-10 sm:py-3 mou cursor-pointer bg-[#1E88E5]/70 text-white/80 hover:border-white/80  hover:text-white hover:shadow-2xl bg-red-600 hover:bg-red-400"
          >
            <div className="flex items-center justify-center">
              <FaTrash className="mr-2 mt-1" />
              <span>Delete</span>
            </div>
          </NavLink>
          <button className="text-gray/50 relative rounded-lg border-[2px] border-white/30 px-4 py-1 font-bold transition-all sm:px-10 sm:py-3 mou cursor-pointer bg-[#1E88E5]/70 text-white/80 hover:border-white/80  hover:text-white hover:shadow-2xl bg-green-600 hover:bg-green-400">
            <div className="flex items-center justify-center">
              <FaShare className="mr-2 mt-1" />
              <span>Share</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
