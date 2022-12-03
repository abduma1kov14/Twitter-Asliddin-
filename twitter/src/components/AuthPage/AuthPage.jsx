import React, { useState } from "react";

import styles from "./AuthPage.module.css";

import bgLeft from "./images/background.png";

import bird from "./images/twitter.gif";

import blue from "./images/twitter-logo.svg";
import { useCookies } from "react-cookie";

import { Link } from "react-router-dom";
import { AuthModal } from "./AuthModal/AuthModal";
import { AuthModalLogin } from "./AuthModalLogin/AuthModalLogin";

export const AuthPage = ({ setOpen }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useCookies()
  const [cookiesPass, setCookiesPass] = useCookies()
  const [email, setEmail] = useCookies()
  

  const modalOpenHandler = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.authPage}>
          <div className={styles.leftSide}>
            <img className={styles.bgImg} src={bgLeft} alt={bgLeft} />
            <img className={styles.twitBird} src={bird} alt={styles} />
          </div>
        <div className={styles.rightSide}>
            <div className={styles.auth}>
              <div className={styles.authAbout}>
                <img className={styles.blue} src={blue} alt={blue} />
                <h2>Happening now</h2>
                <p>Join Twitter today</p>
              </div>
              <div className={styles.authBy}>
                <button>
                  <img
                    src="https://community.cdn.kony.com/sites/default/files/icon-google.png"
                    alt="https://community.cdn.kony.com/sites/default/files/icon-google.png"
                  />{" "}
                  Sign up with Google
                </button>
                <button>
                  <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png"
                    alt="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png"
                  />{" "}
                  Sign up with Apple ID
                </button>
                <Link
                  className={styles.authWithPhoneOrEmail}
                  onClick={modalOpenHandler}
                  to="/"
                >
                  Sign up with phone or email
                </Link>
              </div>
              <div className={styles.toc}>
                By singing up you agree to the
                <Link> Terms of Service </Link> and{" "}
                <Link to="https://twitter.com/ru/privacy">Privacy Policy</Link>,
                including{" "}
                <Link to="https://help.twitter.com/ru/rules-and-policies/twitter-cookies">
                  {" "}
                  Политикой использования файлов cookie.
                </Link>
              </div>
              <div className={styles.toc_one}>
                Already have an account?{" "}
                <Link
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  // to="https://twitter.com/ru/tos"
                >
                  {" "}
                  Log in{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomSide}>
          <ul className={styles.politics}>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li> 
            <li>
              <Link>Ads info</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Status</Link>
            </li>
            <li>
              <Link> Marketing</Link>
            </li>
            <li>
              <Link>Brand Resources</Link>
            </li>
            <li>
              <Link>Status</Link>
            </li>
            <li>
              <Link> Marketing</Link>
            </li>
            <li>
              <Link>Brand Resources</Link>
            </li>
          
            <li>
              <Link>Twitter for Business</Link>
            </li>
            <li>
              <Link>Advertsing</Link>
            </li>
            <li>
              <Link>Developers</Link>
            </li>
          </ul>
        </div>
      {openModal && <AuthModal setUser={setUser} setEmail={setEmail} setCookiePass={setCookiesPass} setOpen={setOpen} setOpenModal={setOpenModal} />}
      {isOpen && <AuthModalLogin user={user} email={email} pass={cookiesPass} cookiesPass={cookiesPass} setOpen={setOpen}  setOpenModal={setOpenModal} setIsOpen={setIsOpen} />}
      </div>
    </>
  );
};
