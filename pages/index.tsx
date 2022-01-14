import Quora from "./Quora";
import Login from "../components/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/UserSlice";
import { useEffect } from "react";
import { auth } from "./firebase";

export default function Home() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
        console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <div>{user ? <Quora /> : <Login />}</div>;
}
