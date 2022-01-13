import { PlusCircleIcon } from "@heroicons/react/solid";
import { RiCompassDiscoverLine } from "react-icons/ri";
import SidebarOptions from "./SidebarOptions";
const Sidebar = () => {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide pb-36">
      <div className="space-y-4">
        <div className="flex items-center p-2 space-x-3 bg-gray-200 rounded-lg mt-6 hover:bg-slate-200">
          <PlusCircleIcon className="h-7 w-7 text-gray-500" />
          <p className="text-gray-600 text-xs font-semibold">Create space</p>
        </div>
        <SidebarOptions />
        <div className="flex items-center p-2 space-x-3 rounded-lg mt-6 hover:bg-slate-200">
          <RiCompassDiscoverLine className="h-7 w-7 text-gray-500" />
          <p className="text-gray-600 text-xs font-semibold">Discover space</p>
        </div>
        <hr className="border-t-[0.1px] border-slate-300" />
        <div className="p-2">
          <ul className="flex flex-col text-xs text-slate-500 cursor-pointer space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>TermsPrivacy</li>
            <li>Acceptable </li>
            <li>UseBusinesses</li>
            <li>Press</li>
            <li>Your Ad Choices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
