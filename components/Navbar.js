import {
  Avatar,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
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
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
import db, { auth } from "../pages/firebase";
import firebase from "firebase";

const Navbar = () => {
  const user = useSelector(selectUser);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState("");
  const [inputUri, setInputUri] = useState("");

  const handleSubmit = () => {
    db.collection("questions").add({
      imageUrl: inputUri,
      question: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user,
    });
    setInput("");
    setInputUri("");
    onClose();
  };

  return (
    <div className="flex items-center bg-white shadow p-4 sticky top-0 w-full z-50">
      <div className="flex items-center mx-auto space-x-10">
        <div className="cursor-pointer">
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
          <Avatar
            src={user.photo}
            onClick={() => auth.signOut()}
            size={"sm"}
            className="cursor-pointer"
          />
        </div>
        <div>
          <GlobeAltIcon className="button" />
        </div>
        <div>
          <Button onClick={onOpen} borderRadius={"3xl"} colorScheme={"red"}>
            Add Question
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
            <ModalOverlay />

            <ModalContent>
              <ModalCloseButton />
              <ModalHeader>
                <div className="flex items-center justify-center">
                  <div className="flex items-end py-2 px-3 rounded-3xl hover:bg-gray-100">
                    <h1 className="text-center text-gray-500 text-sm font-semibold mr-2">
                      Add Question
                    </h1>
                    <AiOutlineDown className="h-4 w-4 text-gray-500 cursor-pointer" />
                  </div>
                </div>
              </ModalHeader>

              <ModalBody>
                <div className="">
                  <div className="flex items-center mb-4">
                    <Avatar src={user.photo} size={"xs"} className="mr-2" />
                    <h1 className="text-xs text-gray-500 mr-4">
                      {user.displayName ? user.displayName : user.email} asked
                    </h1>
                    <button className="flex items-center space-x-1 border border-gray-300 rounded-3xl px-4 py-1 hover:bg-gray-100">
                      <UsersIcon className="h-4 w-4 text-gray-600" />
                      <h1 className="text-sm font-semibold text-gray-600">
                        Public
                      </h1>
                      <AiOutlineDown className="h-3 w-3 text-gray-500 cursor-pointer" />
                    </button>
                  </div>

                  <div className="mb-60">
                    <input
                      required
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      type="text"
                      className="w-full border-b border-gray-300 pt-4 pb-2 mb-4 outline-none hover:border-blue-500"
                      placeholder='Start your question with "What", "How", "Why", etc. '
                    />
                    <div className="flex items-center space-x-2">
                      <GrAttachment className="text-gray-500" />
                      <input
                        value={inputUri}
                        onChange={(e) => setInputUri(e.target.value)}
                        type="text"
                        className="outline-none w-3/4 "
                        placeholder="Optional linkOptional: include a link that gives context"
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              </ModalBody>

              <ModalFooter>
                <div className="m -mt-2">
                  <Button
                    variant="ghost"
                    borderRadius={"3xl"}
                    mr={3}
                    size={"sm"}
                    color={"gray.600"}
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    color={"white"}
                    backgroundColor={"#2e69ff"}
                    borderRadius={"3xl"}
                    _hover={{ bg: "#2e69ffd8" }}
                    size={"sm"}
                  >
                    Add Question
                  </Button>
                </div>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
