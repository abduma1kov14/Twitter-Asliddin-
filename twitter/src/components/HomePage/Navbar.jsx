import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import user1 from "../images/user1.png"
import logo from "../images/logo.svg";
import home from "../images/home.svg";
import explore from "../images/explore.svg";
import notification from "../images/notification.svg";
import messages from "../images/messages.svg";
import bookmarks from "../images/bookmark.svg";
import lists from "../images/lists.svg";
import profile from "../images/white_profile.svg";
import more from "../images/more.svg";
import homeBold from "../images/black_home.svg";
import exploreBold from "../images/black_explore.svg";
import notificationBold from "../images/black_notification.svg";
// import messagesBold from "../images/";
import bookmarksBold from "../images/black_bookmark.svg";
import listsBold from "../images/black_lists.svg";
import profileBold from "../images/black_profile.svg";
import feather from "../images/black_more.svg";

import classNames from "classnames";

import styles from "./Navbar.module.css";
export const Navbar = () => {
  const [filter, setFilter] = useState(document.title);
  const [profileModal, setProfileModal] = useState(false);
  const [moreItemModal, setMoreItemModal] = useState(false);
  const boldClass = (item) => {
    if (filter === item.title) {
      if (item.title === "More") {
        return false;
      }
      return true;
    }
  };
  const name = localStorage.getItem("user");
  let Name = "";
  if (name) {
    const nameFirst = name[0].toUpperCase();
    const lastName = name.slice(1);
    const fullName = `${nameFirst}${lastName}`;
    Name = fullName;
  }

  useEffect(() => {
    NavLinks.map((e) => {
      document.title = `${filter}`;
      if (filter === "More") {
        console.log("ewfef");
      } else {
        return;
      }
    });
  });
  const NavLinks = [
    {
      title: "Home",
      url: "/",
      img: home,
      boldImg: homeBold,
    },
    {
      title: "Explore",
      url: "/",
      img: explore,
      boldImg: exploreBold,
    },
    {
      title: "Notification",
      url: "/",
      img: notification,
      boldImg: notificationBold,
    },
    {
      title: "Messages",
      url: "/",
      img: messages,
      // boldImg: messagesBold,
    },
    {
      title: "Bookmarks",
      url: "/",
      img: bookmarks,
      boldImg: bookmarksBold,
    },
    {
      title: "Lists",
      url: "/",
      img: lists,
      boldImg: listsBold,
    },
    {
      title: "Profile",
      url: `profile`,
      img: profile,
      boldImg: profileBold,
    },
    {
      title: "More",
      url: "/",
      img: more,
      boldImg: more,
    },
  ];
  return (
    <div>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <img src={logo} alt="/" />
        </div>
        <div className={styles.nav__menu}>
          <ul className={styles.nav__list}>
            {NavLinks.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setFilter(item.title);
                    if (item.title === "More") {
                      setMoreItemModal(true);
                    }
                  }}
                  className={classNames(
                    boldClass(item)
                      ? [styles.nav__item, styles.activeItem]
                      : styles.nav__item
                  )}
                  key={index}
                >
                  <Link key={item.boldImg + item} to={item.url}>
                    <div>
                      <img
                        src={filter === item.title ? item.boldImg : item.img}
                        alt="/"
                      />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.twBtn}>
            <button>Tweet</button>
            <div>
              <span>+</span>
              <img className={styles.feactherImg} src={feather} alt="/" />
            </div>
          </div>
          <div
            onClick={() => setProfileModal(true)}
            className={styles.myAccount}
          >
            <div className={styles.myAcc__desc}>
              <div className={styles.profile__icon}></div>
              <div className={styles.myAcc__title}>
                <img src={user1} alt="user1"/>
                <h4>{Name}</h4>
                <p>@{localStorage.getItem("user")?.toLocaleLowerCase()}</p>
              </div>
              <button className={styles.button} onClick={()=> {
                localStorage.clear()
                window.location.reload()
              }}>

                <Link className={styles.links} to="/">Log Out</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
