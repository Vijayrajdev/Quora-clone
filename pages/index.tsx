import Quora from "./Quora";
import Login from "../components/auth/Login";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";

export default function Home() {
  const user = useSelector(selectUser);
  return <div>{user ? <Quora /> : <Login />}</div>;
}
