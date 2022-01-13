import WidgetOptions from "./WidgetOptions";
const Widget = () => {
  return (
    <div className="pt-6 h-screen overflow-y-scroll scrollbar-hide pb-36">
      <div className="bg-white p-4 rounded-md border border-slate-300 hover:border-slate-400 w-[16rem]">
        <h1 className="ml-4 text-md text-black font-semibold">
          Spaces to follow
        </h1>
        <hr className="my-2" />
        <WidgetOptions />
      </div>
    </div>
  );
};

export default Widget;
