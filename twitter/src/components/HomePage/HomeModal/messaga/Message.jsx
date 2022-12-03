import { useState } from "react";

import styles from "./Message.module.css";

import podelitsa from "../../../images/podelitsa.svg";
import like from "../../../images/like.svg";
import red_like from "../../../images/red_like.svg";
import refresh from "../../../images/refresh.svg";
import user1 from "../../../images/user1.png";
import commentary from "../../../images/commentary.svg";
import heart from "../../../images/heart.svg";

export const Message = ({ text, img }) => {
  const [whiteToRed, setwhiteToRed] = useState(false);

  const name = localStorage.getItem("user");
  let Name = "";
  if (name) {
    const nameFirst = name[0].toUpperCase();
    const lastName = name.slice(1);
    const fullName = `${nameFirst}${lastName}`;
    Name = fullName;
  }

  const changeLike = () => {
    setwhiteToRed(!whiteToRed);
  };
  return (
    <>
      <div className={styles.message}>
        <div className={styles.tweet_user_foto}>
          <img src={user1} alt="" />
        </div>
        <div className="tweet_text_section">
          <div className={styles.user_nick}>
            <h3>{Name}</h3>
            <p>@{localStorage.getItem('user').toLocaleLowerCase()}</p>
            <img className={styles.heart} src={heart} alt="" />
          </div>
          <p className={styles.tweet_text}>{text}</p>
          <div className={styles.image}>
          {img ? <img src={img} alt={img}/> : null}
          </div>
          <div className={styles.commands}>
            <img
              className={styles.commentary_icon}
              src={commentary}
              alt="commentary"
            />
            <img src={refresh} alt="refresh" />
            <div className={styles.like}>
              {" "}
              <img
                onClick={changeLike}
                src={!whiteToRed ? like : red_like}
                alt="like"
              />
            </div>
            <img src={podelitsa} alt="podelitsa" />
          </div>
        </div>
      </div>
    </>
  );
};
