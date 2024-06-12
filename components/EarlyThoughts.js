import Sidebar from "../components/Sidebar";
import CardTitle from "../components/CardTitle";
import Toolbar from "../components/Toolbar";

const EarlyThoughts = () => {
  return (
    <div className="w-full h-screen relative bg-offwhite overflow-hidden flex flex-row items-start justify-start text-center text-sm text-textprimary font-nunito">
      <Sidebar />
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start text-left text-[20px]">
        <Toolbar />
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start p-6">
          <div className="w-[640px] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[16px]">
            <CardTitle
              title="Benefits of gradual product development"
              timestamp="jun 11, 2024 at 9:41am"
            />
            <div className="self-stretch relative text-[16px] tracking-[-0.01em] leading-[150%] font-medium">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li className="mb-1">
                  Shipping gradual improvements to the product
                </li>
                <li className="mb-1">
                  Waterfall development strategy but split into cycles to avoid
                  planning in detail too far in time
                </li>
                <li>Clearly see a before and after for each project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyThoughts;
