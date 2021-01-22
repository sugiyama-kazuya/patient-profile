import React, { useContext, useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppContext from "../../contexts/AppContext";
import { FIRST_DIALOG_CLOSE } from "../../actions/index";
import { DefaultButton } from "../../components/index";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.min.css";
import "../../styles/App.css";
import explanation1 from "../../images/explanation-1_1.png";
import explanation2 from "../../images/explanation-2.png";

const FirstDialog = () => {
  const { state, dispatch } = useContext(AppContext);

  const [content, setContent] = useState(null);

  const params = {
    initialSlide: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Dialog
      open={state.isFirstDialog}
      maxWidth="lg"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Swiper {...params}>
        <div className="explanation">
          <div className="explanation__inner">
            <div className="explanation__title-wrapper">
              <h2 className="explanation__title">簡単！２ステップ！</h2>
            </div>
            <figure className="explanation__img-wrapper">
              <img className="explanation__img" src={explanation1} alt="" />
            </figure>
            <div className="explanation__text-1-wrapper">
              <p className="explanation__text">
                タップして入力してね！！！
                <br />
                全て入力し終えたらPREVIEWボタンを押してね♪
              </p>
            </div>
          </div>
        </div>
        <div className="explanation">
          <div className="explanation__inner">
            <div className="explanation__title-wrapper">
              <h2 className="explanation__title">簡単！２ステップ！</h2>
            </div>
            <figure className="explanation__img-wrapper">
              <img className="explanation__img-2" src={explanation2} alt="" />
            </figure>
            <div className="explanation__text-1-wrapper">
              <p className="explanation__text second-text-one">
                <span className="second-text-title">
                  iPhoneをお使いの場合：
                </span>
                <br />
                青枠の中の画像を長押しして、画像を保存しよう！
              </p>
              <p className="explanation__text ">
                <span className="second-text-title">
                  Andloaidをお使いの場合：
                </span>
                <br />
                画像を保存するボタンを押して、画像を保存しよう！
              </p>
            </div>
          </div>
        </div>
        <div className="explanation__third">
          <div className="explanation__third-inner">
            <p className="explanation__text third-text">
              保存した画像を
              <br />
              ツイートしよう(^O^)／
            </p>
            <DefaultButton
              name={"はじめる"}
              onClick={() => dispatch({ type: FIRST_DIALOG_CLOSE })}
              size={"large"}
            />
          </div>
        </div>
      </Swiper>
    </Dialog>
  );
};

export default FirstDialog;
