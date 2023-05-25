const UserData = () => {
  return (
    <div className=" overflow-x-hidden overflow-y-auto mr-2 mb-2">
      <div className="border-white/10 hover:border-white/40 mx-2 my-1 rounded-lg border-[1px] bg-white/20 p-2 font-mono text-xs sm:mx-4 sm:p-3 sm:my-1.5 sm:text-sm">
        <span>
          👉 Create an agent by adding a name / goal, and hitting deploy! Try
          our examples below!
        </span>
      </div>
      <div className="m-2 flex flex-col justify-between gap-2 sm:m-4 lg:flex-row">
        <div className="w-full p-2 sm:w-[33%] cursor-pointer rounded-lg bg-sky-600 font-mono text-sm hover:bg-sky-700 sm:text-base border-[2px] border-white/20 hover:border-[#1E88E5]/40">
          <p className="text-lg font-black">PlatformerGPT 🎮</p>
          Write some code to make a platformer game.
        </div>

        <div className="w-full p-2 sm:w-[33%] cursor-pointer rounded-lg bg-sky-600 font-mono text-sm hover:bg-sky-700 sm:text-base border-[2px] border-white/20 hover:border-[#1E88E5]/40">
          <p className="text-lg font-black">TravelGPT 🌴</p>
          Plan a detailed trip to Hawaii.
        </div>

        <div className="w-full p-2 sm:w-[33%] cursor-pointer rounded-lg bg-sky-600 font-mono text-sm hover:bg-sky-700 sm:text-base border-[2px] border-white/20 hover:border-[#1E88E5]/40">
          <p className="text-lg font-black">ResearchGPT 📜</p>
          Create a comprehensive report of the Nike company
        </div>
      </div>
    </div>
  );
};

export default UserData;
