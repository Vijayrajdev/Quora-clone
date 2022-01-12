import { Avatar, Button, Image } from "@chakra-ui/react";
import { BiUpvote, BiDownvote, BiRepost, BiComment } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Post = () => {
  return (
    <div>
      <div className="p-4 bg-white hover:bg-gray-100 my-4 border border-slate-300 hover:border-slate-400 rounded-md">
        <div className="flex items-center mb-4">
          <Avatar size={"xs"} className="cursor-pointer mr-2" />
          <h2 className="text-sm text-black font-bold mr-5">Username</h2>
          <h3 className="">Timestamp</h3>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h3>What's your question?</h3>
          <Button borderRadius={"3xl"} colorScheme={"red"}>
            Answer
          </Button>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            className="object-contain rounded-md mb-4"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-7">
            <div className="flex space-x-5 bg-gray-200 p-2 rounded-3xl">
              <BiUpvote className="h-5 w-5 cursor-pointer hover:text-red-600" />
              <BiDownvote className="h-5 w-5 cursor-pointer hover:text-red-600" />
            </div>
            <div className="flex space-x-5 p-2">
              <BiRepost className="h-5 w-5 cursor-pointer hover:text-red-600" />
              <BiComment className="h-5 w-5 cursor-pointer hover:text-red-600" />
            </div>
          </div>
          <div className="flex p-2 space-x-5">
            <AiOutlineShareAlt className="h-5 w-5 cursor-pointer hover:text-red-600" />
            <HiOutlineDotsHorizontal className="h-5 w-5 cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
