import styles from "./AuthModalLogin.module.css";
import React, { useRef } from "react";

import blue from "../images/twitter-logo.svg";

import { Link } from "react-router-dom";

export const AuthModalLogin = ({
  setIsOpen,
  setOpenLogin,
  setOpenModal,
  setOpen,
  pass,
  user,
  email,
}) => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const accRef = useRef(null);

  const nextPage = () => {
    if (emailRef.current && emailRef.current.value) {
      if (emailRef.current.value !== user.user) {
        console.log("User not found");
        console.log(user.user)
      } else {
        console.log(user.user)
        localStorage.setItem("user", user.user);
        localStorage.setItem("phoneOrEmail", email.email);
      }
    }
    if (passRef.current) {
      accRef.current.disabled = false;
      accRef.current.onclick = () => {
        if (passRef.current.value === pass.pass) {
          console.log(pass.pass)
          alert("Saved!");
          window.location.reload()
          localStorage.setItem("pass", pass.pass)
          setOpenLogin(false);
          setOpen(true);
          localStorage.setItem("pass", pass.pass);
          document.body.style.overflow = "";
        }
        alert('not Found')
      };
    }
  };

  const modalOpenHandler = () => {
    setOpenModal(true);
    setIsOpen(false);
  };

  const homeOpenener = () => {
    setOpen(true);
  };

  const modalCloseHandler = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };
  console.log("opened");
  return (
    <>
      <div className={styles.authLogin}>
        <div className={styles.authLogin_img}>
          <button tabIndex={0} onClick={modalCloseHandler}>
            <img src={require("./xxx.webp")} alt="img" />
          </button>
        </div>
        <img src={blue} alt={blue} />
        <h1>Log in to Twitter</h1>
        <input
          type="text"
          onChange={nextPage}
          placeholder="Phone number, email address"
          ref={emailRef}
        />
        <input
          autoFocus={true}
          type="password"
          onChange={nextPage}
          placeholder="Passwords"
          ref={passRef}
        />
        <div className={styles.authLogin_2}>
          <button
            onClick={homeOpenener}
            className={styles.button}
            disabled={true}
            onChange={nextPage}
            ref={accRef}
          >
            Log In
          </button>
        </div>
        <Link onClick={modalOpenHandler}>Forgot password?</Link>
        <Link>Sign up to Twitter</Link>
      </div>
      <div className={styles.authBg} />
    </>
  );
};
