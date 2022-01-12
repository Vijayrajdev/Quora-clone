import { Avatar } from "@chakra-ui/react";

const FeedBox = () => {
  return (
    <div className="bg-white p-4 border-slate-300 border shadow rounded-md hover:border-slate-400">
      <div className="flex items-center space-x-2 pb-2">
        <Avatar size={"xs"} className="cursor-pointer" />
        <h5 className="text-xs text-slate-500 font-medium">Username</h5>
      </div>
      <div>
        <h1 className="text-lg text-[#939598] font-bold">
          What do you want to ask or share?
        </h1>
      </div>
    </div>
  );
};

export default FeedBox;
