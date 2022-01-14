import {
  Avatar,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BiUpvote, BiDownvote, BiRepost, BiComment } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuestionId,
  selectQuestionName,
  setQuestionInfo,
} from "../features/QuestionSlice";
import { useEffect, useState } from "react";
import db from "../pages/firebase";
import { selectUser } from "../features/UserSlice";
import firebase from "firebase";

const Post = ({
  Id,
  userQuestion,
  imageUrl,
  timestamp,
  photo,
  username,
  mail,
  quorauser,
}) => {
  const user = useSelector(selectUser);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const questionId = useSelector(selectQuestionId);
  const questionName = useSelector(selectQuestionName);
  const [answer, setAnswer] = useState("");

  const [getAnswers, setGetAnswers] = useState([]);

  useEffect(() => {
    if (questionId) {
      db.collection("questions")
        .doc(questionId)
        .collection("answer")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) =>
          setGetAnswers(
            snap.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
          )
        );
    }
  });
  const handleAnswer = (e) => {
    if (questionId) {
      db.collection("questions").doc(questionId).collection("answer").add({
        questionId: questionId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        answers: answer,
        user: user,
      });

      console.log({ questionId, questionName });

      onClose();
      setAnswer("");
    } else {
      console.log("error");
    }
  };

  return (
    <div
      onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName: userQuestion,
          })
        )
      }
    >
      <div className="p-4 bg-white hover:bg-gray-100 my-4 border border-slate-300 hover:border-slate-400 rounded-md">
        <div className="flex items-center mb-4">
          <Avatar src={photo} size={"xs"} className="cursor-pointer mr-2" />
          <h2 className="text-sm text-black font-bold mr-5">
            {username ? username : mail}
          </h2>
          <h3 className="">{new Date(timestamp?.toDate()).toLocaleString()}</h3>
        </div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-md font-semibold mr-4">{userQuestion}</h3>
          <Button
            borderRadius={"3xl"}
            color={"white"}
            backgroundColor={"#2e69ff"}
            _hover={{ bg: "#2e69ffd8" }}
            size={"sm"}
            onClick={onOpen}
          >
            Answer
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
            <ModalOverlay />

            <ModalContent>
              <ModalCloseButton />
              <ModalHeader>
                <div className="flex items-center justify-center">
                  <h1 className="text-center text-red-500 text-2xl font-semibold">
                    {userQuestion}
                  </h1>
                </div>
              </ModalHeader>

              <ModalBody>
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <h1 className="text-xs text-gray-500 mr-4 text-center">
                      Asked by{" "}
                      <span className="text-sm font-semibold text-black">
                        {username ? username : mail}
                      </span>{" "}
                      on{" "}
                      <span className="text-sm font-semibold text-black">
                        {new Date(timestamp?.toDate()).toLocaleString()}
                      </span>
                    </h1>
                  </div>

                  <div>
                    <textarea
                      required
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      type="text"
                      cols="65"
                      rows="7"
                      className="border border-gray-300 outline-none p-4 hover:border-blue-500 rounded-lg"
                    ></textarea>
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
                    type="submit"
                    onClick={handleAnswer}
                    color={"white"}
                    backgroundColor={"#2e69ff"}
                    borderRadius={"3xl"}
                    _hover={{ bg: "#2e69ffd8" }}
                    size={"sm"}
                  >
                    Add Answer
                  </Button>
                </div>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="flex flex-col justify-center text-sm text-gray-500 space-y-2 mb-4">
          {getAnswers.map(({ id, answers }) => (
            <p key={id}>
              {Id === answers.questionId ? (
                <span className="flex item-center justify-between">
                  <span>{answers.answers}</span>
                  <span className="flex space-x-2 text-xs hover:bg-gray-200 rounded-3xl py-1 px-4">
                    <span className="text-red-500">
                      {user.displayName ? user.displayName : user.email}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <img src={imageUrl} className="object-fill rounded-md mb-4" alt="" />
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
