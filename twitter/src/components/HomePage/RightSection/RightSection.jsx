import React from "react";

import Elon_Musk from "../../images/Elon_Musk.jpg";
import search from "../../images/search 1.svg";
import style from "./RightSection.module.css";
export const RightSection = () => {
  return (
    <>
      <div className={style.RightSection}>
        <div className={style.search_section}>
          <img className={style.search_img} src={search} alt="search" />
          <input
            className={style.input_search}
            type="text"
            placeholder="Search Twitter"
          />
        </div>
        <h1 className={style.search_h}>Trends for you</h1>
        <div className={style.Followers_section}>
          <h1>Who to follow</h1>
          <div className={style.Followers}>
            <img src={Elon_Musk} alt="elon musk foto" />
            <h4>Elon Musk</h4>
            <h4 className={style.elon}>
              <a href="#">@elonmusk</a>
            </h4>
            <button className={style.followers_button}>Follow</button>
          </div>
          <div className={style.Followers}>
            <img src={Elon_Musk} alt="elon musk foto" />
            <h4>Elon Musk</h4>
            <h4 className={style.elon}>
              <a href="#">@elonmusk</a>
            </h4>
            <button className={style.followers_button}>Follow</button>
          </div>
          <div className={style.Followers}>
            <img src={Elon_Musk} alt="elon musk foto" />
            <h4>Elon Musk</h4>
            <h4 className={style.elon}>
              <a href="#">@elonmusk</a>
            </h4>
            <button className={style.followers_button}>Follow</button>
          </div>
          <div className={style.Followers}>
            <img src={Elon_Musk} alt="elon musk foto" />
            <h4>Elon Musk</h4>
            <h4 className={style.elon}>
              <a href="#">@elonmusk</a>
            </h4>
            <button className={style.followers_button}>Follow</button>
          </div>
        </div>
      </div>
    </>
  );
};
