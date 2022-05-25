import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.amocrm.com/static/images/pages/integrations/logo/gmail.png"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
