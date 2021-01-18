import React, { useReducer, useRef } from "react";
import "./styles/App.css";
import {
  Header,
  ProfileImg,
  Card,
  LargeCard,
  DefaultDialog,
} from "./components/index";
import AppContext from "./contexts/AppContext";
import reducer from "./reducers/index";
import { initialState } from "./reducers/initialState";
import * as Constans from "./constans.js";
import * as html2canvas from "html2canvas";
import * as Actions from "./actions/index";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const previewData = useRef(null);

  const savePreview = async () => {
    let imageurl;
    await html2canvas(previewData.current).then((canvas) => {
      imageurl = canvas.toDataURL("image/jpeg");
    });

    dispatch({ type: Actions.SAVE_PREVIEW, imageurl });
  };

  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  window.addEventListener("resize", setFillHeight);
  setFillHeight();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App" ref={previewData}>
        <DefaultDialog />
        <Header savePreview={savePreview} />
        <div className="content-wrapper">
          <div className="upper-wrapper">
            <div className="content-1">
              <Card tag={"名前"} item={Constans.NAME} />
              <Card tag={"性別"} item={Constans.SEX} />
              <Card tag={"誕生日"} item={Constans.BIRTHDAY} />
            </div>
            <ProfileImg />
          </div>
          <LargeCard tag={"病名"} item={Constans.DISEASENAME} />
          <LargeCard tag={"治療歴"} item={Constans.TREATMENT_HISTORY} />
          <LargeCard tag={"悩み"} item={Constans.TROUBLE} />
          <LargeCard tag={"こんな人と繋がりたい！！"} item={Constans.CONNECT} />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
