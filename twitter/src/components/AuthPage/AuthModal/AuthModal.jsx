import React, { useState, useRef } from "react";

import styles from "./AuthModal.module.css";

import icon from "../images/iks.webp";
import passImg from "../images/pass.png";
import arrow from "../images/arrowLeft.svg";

export const AuthModal = ({ setOpenModal, setOpen, setEmail, setCookiePass, setUser }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("Телефон");
  const [close, setClose] = useState(false);
  const [pass, setPass] = useState(false);
  const [pages, setPages] = useState(1);

  const phoneOrEmailRef = useRef(null);
  const closeOrChangePageRef = useRef(null);
  const userNameRef = useRef(null);
  const nextBtnRef = useRef(null);
  const passRef = useRef(null);
  const passwordRef = useRef(null);

  const changeEmailToPhone = () => {
    setEmailOrPhone(!emailOrPhone);
    if (phoneOrEmailRef.current) {
      phoneOrEmailRef.current.value = "";
    }
  };

  const changeToNext = () => {
    setPages(1);
  };

  const changeToPrev = () => {
    setPages(2);
  };

  const modalCloseHandler = () => {
    setOpenModal(false);
    document.body.style.overflow = "";
  };

  const onOver = () => {
    setClose(true);
  };

  const onLeave = () => {
    setClose(false);
  };

  const homeOpenener = () => {
    if (passwordRef.current) {
      if (passRef.current) {
        passRef.current.onclick = () => {
          localStorage.setItem("pass", passwordRef.current.value);
          setCookiePass("pass", passwordRef.current.value, { path: "/" });
          setOpenModal(false);
          setOpen(true);
        };
      }
    } else {
      if (passRef.current && passwordRef.current.value === null) {
        passRef.current.onclick = () => {
          alert("why");
        };
      }
    }
  };

  const changeTypeHandler = () => {
    setPass(!pass);
  };

  const changeBtnDisable = () => {
    if (
      userNameRef.current.value !== "" &&
      phoneOrEmailRef.current.value !== ""
    ) {
      nextBtnRef.current.disabled = false;
      if (nextBtnRef.current) {
        nextBtnRef.current.onclick = () => {
          setPages(2);
          localStorage.setItem("user", userNameRef.current.value);
          setUser("user", userNameRef.current.value, { path: "/" })
          
          localStorage.setItem("emailOrPhone", phoneOrEmailRef.current.value);
          setEmail("email", phoneOrEmailRef.current.value, { path: "/" })
        };
      }
    } else {
      if (
        userNameRef.current.value === "" ||
        phoneOrEmailRef.current.value === ""
      ) {
        nextBtnRef.current.disabled = true;
      }
    }
  };

  const setPassword = () => {
    if (passwordRef.current && passwordRef.current.value !== null) {
      passRef.current.disabled = false;
    } else {
      passRef.current.disabled = true;
    }
  };

  let listOfYears = ["Year"];

  let year = new Date().getFullYear();

  let months = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = year; i >= year - 120; i--) {
    listOfYears.push(i);
  }

  let listOfDates = ["Day"];

  for (let i = 31; i >= 1; i--) {
    listOfDates.push(i);
  }
  return (
    <>
      <div className={styles.authModal}>
        <div className={styles.top}>
          <button
            tabIndex={0}
            ref={closeOrChangePageRef}
            onClick={
              pages === 1
                ? modalCloseHandler
                : pages === 2
                ? changeToNext
                : changeToPrev
            }
          >
            <img
              src={pages === 1 ? icon : (pages === 2) | 3 ? arrow : null}
              onMouseLeave={onLeave}
              onMouseOver={onOver}
              alt={icon}
            />
            {close & (pages === 1) ? <p>Close</p> : null}
            {close & (pages === 2) ? <p>Back</p> : null}
            {close & (pages === 3) ? <p>Back</p> : null}
          </button>
          <h2>Step {pages} of 3</h2>
        </div>
        {pages === 1 ? (
          <>
            <div className={styles.center}>
              <div className={styles.aboutUser}>
                <h2>Create an account</h2>
                <input
                  autoFocus={true}
                  type="text"
                  onChange={() => {
                    changeBtnDisable();
                    // alertErr()
                  }}
                  ref={userNameRef}
                  placeholder="Name"
                  required
                />
                <input
                  ref={phoneOrEmailRef}
                  onChange={() => {
                    changeBtnDisable();
                  }}
                  type={emailOrPhone ? "number" : "email"}
                  placeholder={emailOrPhone ? "Phone number" : "Email address"}
                  required
                />
                <button tabIndex={-1} onClick={changeEmailToPhone}>
                  Use {emailOrPhone ? "Email address" : "Phone number"}
                </button>
              </div>
              <div className={styles.userData}>
                <h4>Date of birth</h4>
                <p>
                  Facilisi sem pulvinar velit nunc, gravida scelerisque amet
                  nibh sit. Quis bibendum ante phasellus metus, magna lacinia
                  sed augue. Odio enim nascetur leo mauris vel eget. Pretium id
                  ullamcorper blandit viverra dignissim eget tellus. Nibh mi
                  massa in molestie a sit. Elit congue.
                </p>
                <div className={styles.date}>
                  <select id="row1" placeholder="Month">
                    {months.map((month) => {
                      return (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      );
                    })}
                  </select>
                  <select id="row2" placeholder="Day">
                    {listOfDates.map((date) => {
                      return (
                        <option key={date} value={date}>
                          {date}
                        </option>
                      );
                    })}
                  </select>
                  <select id="row3">
                    {listOfYears.map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <button ref={nextBtnRef} disabled={true}>
                  Next
                </button>
              </div>
            </div>
          </>
        ) : pages === 2 ? (
          <>
            <div className={styles.center}>
              <div className={styles.privacy}>
                <h2>Customize Twitter the way you want</h2>
              </div>
              <div className={styles.privacyBtm}>
                <h3>Track which sites are serving Twitter content</h3>
              </div>
              <div className={styles.privacyBtmLast}>
                <p>
                  Twitter uses this data to curate content for your feed. Your
                  name, email address and phone number will never be stored with
                  your browsing history.
                </p>
                <input type="checkbox"/>
              </div>
              <div className={styles.areYouSure}>
                <p>
                  By registering, you accept our Terms, Privacy Policy and
                  Cookie Policy. Twitter may use your contact information,
                  including your email address and phone number, for the
                  purposes described in our Privacy Policy. More
                </p>
              </div>
              <button
                onClick={() => {
                  setPages(3);
                }}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.center}>
              <div className={styles.makePassTop}>
                <h2>Create an account</h2>
              </div>
              <div className={styles.makePass}>
                <input
                  placeholder="Password"
                  ref={passwordRef}
                  autoComplete="off"
                  onChange={()=>{setPassword()
                  homeOpenener()}}
                  type={!pass ? "password" : "text"}
                />
                <button onClick={changeTypeHandler}>
                  <img src={passImg} alt={passImg} />
                </button>
              </div>
              <div className={styles.areYouSure}>
                <p>
                  By registering, you accept the Terms of Service, Privacy
                  Policy and Cookie Policy. Twitter may use your contact
                  information, including your email address and phone number,
                  for the purposes described in our Privacy Policy, such as
                  maintaining account security and personalizing services,
                  including advertising. More. Other users will be able to find
                  you using the email address or phone number you provide,
                  unless you specify otherwise here.
                </p>
              </div>
              <button onClick={()=>{
                alert('Please enter the code')  
              }}
                ref={passRef}>
                Sing In
              </button>
            </div>
          </>
        )}
      </div>
      <div className={styles.authBg} />
    </>
  );
};
