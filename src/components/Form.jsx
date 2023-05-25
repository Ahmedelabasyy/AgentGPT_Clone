import { useState } from "react";
import { FaRobot, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { agentResults, clearAgent } from "../features/slices/statesSlice";
import { useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { agentResult } = useSelector((state) => state.agent);
  const [task, setTask] = useState("");
  console.log("nameeeeeee", name);
  console.log(task);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(agentResults({ [name]: task }));
  };

  const handleClear = () => {
    dispatch(clearAgent());
  };

  return (
    <div className="flex w-full flex-col gap-2 lg:m-4 ">
      <div className="items-left z-5 flex h-fit w-full flex-col rounded-xl font-mono text-lg text-white/75  md:bg-[#3a3a3a] shadow-xl md:flex-row md:items-center">
        <div className="lg:w-1/4">
          <div className="center flex items-center rounded-xl rounded-r-none border-white/10 md:border-[2px] md:border-r-0 py-2 text-sm font-semibold tracking-wider transition-all md:py-3 md:pl-3 md:text-lg">
            <FaRobot />
            <span className="ml-2">Name</span>
          </div>
        </div>
        <input
          onChange={handleName}
          type="text"
          placeholder="AgentGPT"
          className="border:black delay-50 w-full rounded-xl bg-[#3a3a3a] py-1 text-sm tracking-wider outline-0 transition-all placeholder:text-white/20 hover:border-[#1E88E5]/40 focus:border-[#1E88E5] sm:py-3 md:text-lg border-[2px] border-white/10 px-2 md:rounded-l-none"
        />
      </div>

      <div className="items-left z-5 flex h-fit w-full flex-col rounded-xl font-mono text-lg text-white/75  md:bg-[#3a3a3a] shadow-xl md:flex-row md:items-center">
        <div className="md:w-1/4">
          <div className="center flex items-center rounded-xl rounded-r-none border-white/10 md:border-[2px] md:border-r-0 py-2 text-sm font-semibold tracking-wider transition-all md:py-3 md:pl-3 md:text-lg md:h-20">
            <FaStar />
            <span className="ml-2">Goal</span>
          </div>
        </div>
        <textarea
          onChange={handleTask}
          placeholder="Make the world a better place"
          className="border:black delay-50 h-15 w-full resize-none rounded-xl border-[2px] border-white/10 bg-[#3a3a3a] p-2 text-sm tracking-wider outline-0 transition-all placeholder:text-white/20 hover:border-[#1E88E5]/40 focus:border-[#1E88E5] sm:h-20 md:text-lg md:rounded-l-none"
        ></textarea>
      </div>
      <div className="w-full flex justify-center mt-3 gap-2">
        <button
          onClick={handleSubmit}
          className={`${
            name && task
              ? "relative  text-gray/50  rounded-lg border-[2px] border-white/30 px-4 py-1 font-bold transition-all sm:px-10 sm:py-3 mou cursor-pointer bg-[#1E88E5]/70 text-white/80 hover:border-white/80 hover:bg-[#0084f7] hover:text-white hover:shadow-2xl"
              : "diabled text-gray/50 relative rounded-lg border-[2px] border-white/30 px-4 py-1 font-bold transition-all sm:px-10 sm:py-3 cursor-not-allowed  bg-zinc-900 text-white/30"
          }
        `}
        >
          Deploy Agent
          {name && task ? (
            <span className="absolute right-[-4px] top-[-2px] flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          ) : null}
        </button>
        <button className="text-gray/50 relative rounded-lg border-[2px] border-white/30 px-4 py-1 font-bold transition-all sm:px-10 sm:py-3 cursor-not-allowed  bg-zinc-900 text-white/30">
          Stop Agent
        </button>

        {agentResult.length ? (
          <button
            onClick={handleClear}
            className={`${
              agentResult
                ? "text-gray/50 relative rounded-lg border-[2px] border-white/30 px-4 py-1 font-bold transition-all sm:px-10 sm:py-3 mou cursor-pointer bg-[#1E88E5]/70 text-white/80 hover:border-white/80 hover:bg-[#0084f7] hover:text-white hover:shadow-2xl"
                : "text-gray/50 disabled relative rounded-lg border-[2px] border-white/30 px-4 py-1 font-bold transition-all sm:px-10 sm:py-3 cursor-not-allowed  bg-zinc-900 text-white/30"
            }
        `}
          >
            Clear Agent
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
