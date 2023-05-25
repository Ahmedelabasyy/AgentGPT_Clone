import { FaTasks } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdPushPin } from "react-icons/md";

const Tasks = () => {
  const { agentResult } = useSelector((state) => state.agent);

  return (
    <div className="w-full flex-col items-center rounded-2xl border-2 border-white/20 bg-zinc-900 font-mono shadow-2xl xl:mx-2 xl:flex xl:w-[20rem] xl:px-1">
      <div className="flex justify-center items-center gap-2 py-3">
        <FaTasks />
        <h2 className="font-bold">Current tasks</h2>
      </div>
      <div className="flex h-full w-full flex-col gap-2 px-1 py-1">
        <div className="h-[14em] flex w-full flex-col gap-2 overflow-y-auto overflow-x-hidden pr-1">
          {agentResult.length ? (
            <>
              <div className="w-full animate-[rotate] rounded-md border-2 p-2 text-xs text-white opacity-50 border-white/20 hover:border-white/40">
                <MdPushPin className="mr-2 mb-1 inline-block rotate-[-45deg] text-lg text-white" />
                <span className="mr-2 font-bold">
                  Added task: Develop a plan based on the requirements.
                </span>
              </div>
              <div className="w-full animate-[rotate] rounded-md border-2 p-2 text-xs text-white opacity-50 border-white/20 hover:border-white/40">
                <MdPushPin className="mr-2 mb-1 inline-block rotate-[-45deg] text-lg text-white" />
                <span className="mr-2 font-bold">
                  Added task: Develop a plan based on the requirements.
                </span>
              </div>
              <div className="w-full animate-[rotate] rounded-md border-2 p-2 text-xs text-white opacity-50 border-white/20 hover:border-white/40">
                <MdPushPin className="mr-2 mb-1 inline-block rotate-[-45deg] text-lg text-white" />
                <span className="mr-2 font-bold">
                  Added task: Develop a plan based on the requirements.
                </span>
              </div>
            </>
          ) : (
            <p className="w-full p-2 text-center text-xs text-gray-300">
              This window will display agent tasks as they are created.
            </p>
          )}
        </div>
        <div className="flex flex-row gap-1">
          <div className="items-left z-5 flex h-fit w-full flex-col rounded-xl font-mono text-lg text-white/75 shadow-xl md:bg-[#3a3a3a]  md:flex-row md:items-center">
            <input
              type="text"
              placeholder="Custom task"
              className="border:black delay-50 w-full rounded-xl bg-[#3a3a3a] text-sm tracking-wider outline-0 transition-all placeholder:text-white/20 hover:border-[#1E88E5]/40 focus:border-[#1E88E5] md:text-lg border-[2px] border-white/10 px-2"
            />
          </div>
          <button className="text-gray/50 relative rounded-lg border-[2px] border-white/30   font-bold transition-all   cursor-not-allowed  bg-zinc-900 text-white/30 font-sm px-2 py-[0] text-sm ">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
