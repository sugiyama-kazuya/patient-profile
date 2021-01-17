import React, { useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import { DefaultButton } from "../../index";
import CircularProgress from "@material-ui/core/CircularProgress";

const Preview = () => {
  const { state } = useContext(AppContext);
  const download = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = state.previewData;
    downloadLink.download = "patient-card.jpg";
    downloadLink.click();
  };
  return (
    <div className="preview-img__box">
      {state.previewData ? (
        <img
          className="preview-img"
          src={state.previewData}
          alt="画面キャプチャ"
        />
      ) : (
        <div className="loading-wrapper">
          <CircularProgress color="secondary" />
        </div>
      )}
      <div className="download-btn__wrapper">
        <DefaultButton name={"画像を保存する"} onClick={download} show={true} />
      </div>
    </div>
  );
};

export default Preview;
