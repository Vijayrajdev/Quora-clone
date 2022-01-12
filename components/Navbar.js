import {
  Avatar,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  HomeIcon,
  BellIcon,
  ClipboardCheckIcon,
  FolderIcon,
  UsersIcon,
  SearchIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="flex items-center bg-white h-auto w-auto shadow-sm p-4">
      <div className="flex items-center mx-auto space-x-10">
        <div>
          <img src="logo.svg" width={"120px"} alt="" srcset="" />
        </div>
        <div className="flex items-center space-x-10">
          <HomeIcon className="button" />
          <FolderIcon className="button" />
          <ClipboardCheckIcon className="button" />
          <UsersIcon className="button" />
          <BellIcon className="button" />
        </div>
        <div>
          <div className="w-48">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon className="h-6 w-6 button" />}
              />
              <Input type="search" placeholder="Search Quora" />
            </InputGroup>
          </div>
        </div>
        <div>
          <Avatar size={"sm"} className="cursor-pointer" />
        </div>
        <div>
          <GlobeAltIcon className="button" />
        </div>
        <div>
          <Button borderRadius={"3xl"} colorScheme={"red"}>
            Add Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
