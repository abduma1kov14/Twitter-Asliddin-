import React, { useRef } from "react";
import { Message } from "./messaga/Message";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

import user1 from "../../images/user1.png";
import star from "../../images/star.svg";
import foto from "../../images/foto.svg";
import smile from "../../images/smile.svg";
import schedule from "../../images/schedule.svg";
import gif from "../../images/gif.svg";
import styles from "./HomeModalPage.module.css";

export const HomeModalPage = ({data, message, setMessage, setData}) => {
  const [imageURLs, setImageURLs] = useState([]);
  const [images, setImages] = useState([]);
  const [overed, setOvered] = useState(false)
  // const [emoji, setEmoji] = useState(false);

  const onOver = () => {
    setOvered(true)
  }

  const onLeave = () => {
    setOvered(false)
  } 
  
  useEffect(() => {
    if (images.length < 1) return;
    const newImageURL = [];
    images.forEach((image) => {
      newImageURL.push(URL.createObjectURL(image));
    });
    setImageURLs(newImageURL);
  }, [images]);

  const onImgChange = (e) => {
    setImages([...e.target.files]);
    console.log(images);
  };
  useEffect(() => {
    axios.get("http://localhost:8001").then((response) => {
      setData(response.data);
    });
  }, []);
  
  useEffect(() => {
    if (message) {
      if (message.messages && data) {
        data.unshift(...message.messages);
      }
    }
  }, [data]);

  const tweetRef = useRef(null);
  const tweetInput = useRef(null);
  const tweetImg = useRef(null)
  const tweetPostHandler = () => {
    let tweet = {
      text: tweetInput.current.value,
    };
    if (data) {
      data.unshift({
        img : imageURLs[0],
        text : tweetInput.current.value,
        id: Math.random()
      });
      setMessage("messages", data, { path: "/" });
      tweetInput.current.value = "";
      setImageURLs([null])
      tweetRef.current.disabled = true;
    }
  };
  const tweetImgHandler = () => {
    if (data) {
      data[0].imgs.push(imageURLs[0]);
    }
    console.log(data)
  }
  const disable = () => {
    if (tweetInput) {
      if (!tweetInput.current.value) {
        tweetRef.current.disabled = true;
      } else {
        if (tweetInput.current.value) {
          tweetRef.current.disabled = false;
          tweetRef.current.onclick = () => {
            tweetPostHandler();
            tweetImgHandler()
          };
        }
      }
    }
  };

  return (
    <>
      <div className={styles.middle}>
        <div className={styles.navigation}>
          <h1>Home</h1>
          <img src={star} className={styles.star} alt="star" />
        </div>
        <div className={styles.users}>
          <img src={user1} alt="#" />
          <input
            className={styles.input1}
            type="text"
            placeholder="what's happening?"
            ref={tweetInput}
            onChange={disable}
          />
        </div>
        <div className={styles.someFile}>
          {imageURLs && imageURLs[0]
            ? imageURLs.map((imageSrc) => (
                <>
                  <img
                    key={Math.random() * 2e8}
                    className={styles.fileUpload}
                    src={imageSrc}
                    alt="s"
                  />
                  <button
                    onMouseOver={onOver}
                    onClick={() => {
                      setImageURLs([null]);
                    }}
                    onMouseLeave={onLeave}
                    className={styles.removeBtn}
                  >
                    <img src="" alt="" />
                    <h1>X</h1>
                  </button>
                  {/* {overed ? <p className={styles.overParam}>remove</p> : null} */}
                </>
              ))
            : null}
        </div>
        <div className={styles.icons}>
          <img src={foto} alt="#" />
          <input
            onChange={onImgChange}
            className={styles.tweet_photo}
            type="file"
            accept="image/* "
            multiple
            id=""
          />
          <img src={smile} alt="#" />
          <img src={gif} alt="#" />
          <img src={schedule} alt="#  " />
          <button
            disabled={true}
            ref={tweetRef}
            className={styles.icons_button}
            onClick={tweetPostHandler}
          >
            Tweet
          </button>
        </div>
        {message && message.messages ? (
          message.messages.map((e) => {
            return <Message text={e.text} img={e.img} key={e.id} />;
          })
        ) : data ? data.map(e => {
          return <Message text={e.text} img={e.img} key={e.id}/>
        }) : 
        (
          <>state = sss</>
        )}
        
      </div>
    </>
  );
};
