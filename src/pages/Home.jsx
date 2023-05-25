import bg from "../assets/bg.png";

import { Form, Tasks, Window, Menu } from "../components";

const Home = () => {
  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]"
    >
      <Menu />
      <div className="z-10 flex min-h-screen w-full items-center justify-center p-2 sm:px-4 md:px-10 text-white">
        <div className="flex h-full w-full max-w-screen-xl flex-col items-center justify-between gap-1 py-2 sm:gap-3 sm:py-5 md:justify-center">
          <div className=" flex flex-col items-center font-mono">
            <h1 className="relative text-4xl font-bold text-[#C0C0C0] xs:text-5xl sm:text-6xl">
              Agent<span className="text-white">GPT</span>
              <span className="top-0 w-[82px] absolute mt-2 rounded-full bg-sky-500 font-semibold text-gray-100 transition-all hover:scale-110 px-1 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm">
                <div className="flex flex-row items-center justify-center gap-1">
                  <span>Beta</span> <span>🚀</span>
                </div>
              </span>
            </h1>
            <p className="mt-1 text-center font-mono text-[0.7em] font-bold text-white">
              Assemble, configure, and deploy autonomous AI Agents in your
              browser.
            </p>
          </div>
          <div className="w-full flex lg:flex-row flex-col gap-2 lg:gap-1">
            <Window />
            <Tasks />
          </div>
          <Form />
        </div>
      </div>
    </header>
  );
};

export default Home;
