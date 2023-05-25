import { useSelector } from "react-redux";
import { FaBrain, FaStar } from "react-icons/fa";
import { MdPushPin } from "react-icons/md";

const Agentresults = ({ chatDetails }) => {
  const { agentResult } = useSelector((state) => state.agent);
  console.log("resultsssssss", agentResult);
  return (
    <>
      <div className="border-white/10 hover:border-white/40 mx-2 my-1 rounded-lg border-[1px] bg-white/20 p-2 font-mono text-xs  sm:mx-4 sm:p-3 sm:my-1.5 sm:text-sm">
        <div className="mr-2 inline-block h-[0.9em]">
          <FaStar className="mr-1 mb-1 inline-block text-yellow-300" />
          <span className="mr-2 font-bold">
            Embarking on a new goal:{" "}
            {chatDetails
              ? chatDetails
              : agentResult[0][Object.keys(agentResult[0])]}
          </span>
        </div>
      </div>

      <div className="border-white/10 hover:border-white/40 mx-2 my-1 rounded-lg border-[1px] bg-white/20 p-2 font-mono text-xs  sm:mx-4 sm:p-3 sm:my-1.5 sm:text-sm">
        <div className="mr-2 inline-block h-[0.9em]">
          <FaBrain className="mr-1 mb-1 inline-block mt-[0.1em] text-pink-400" />
          <span className="mr-2 font-bold">Thinking...</span>
          <span className="italic text-zinc-400">
            (Restart if this takes more than 30 seconds)
          </span>
        </div>
      </div>

      <div className="border-white/10 hover:border-white/40 mx-2 my-1 rounded-lg border-[1px] bg-white/20 p-2 font-mono text-xs  sm:mx-4 sm:p-3 sm:my-1.5 sm:text-sm">
        <div className="mr-2 inline-block h-[0.9em]">
          <MdPushPin className="mr-2 mb-1 inline-block rotate-[-45deg] text-lg text-white" />
          <span className="mr-2 font-bold">
            Added task: Identify the specific requirements of the goal.
          </span>
        </div>
      </div>

      <div className="border-white/10 hover:border-white/40 mx-2 my-1 rounded-lg border-[1px] bg-white/20 p-2 font-mono text-xs  sm:mx-4 sm:p-3 sm:my-1.5 sm:text-sm">
        <div className="mr-2 inline-block h-[0.9em]">
          <MdPushPin className="mr-2 mb-1 inline-block rotate-[-45deg] text-lg text-white" />
          <span className="mr-2 font-bold">
            Added task: Develop a plan based on the requirements.
          </span>
        </div>
      </div>
    </>
  );
};

export default Agentresults;
