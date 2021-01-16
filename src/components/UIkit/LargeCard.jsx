import React, { useContext } from "react";
import { Tag } from "../index";
import AppContext from "../../contexts/AppContext";
import * as Constans from "../../constans";

const LargeCard = ({ tag, item, grow = true, changeIconBtn = false }) => {
  const { state } = useContext(AppContext);

  const content = (function () {
    switch (item) {
      case Constans.DISEASENAME:
        return state.diseaseName;
      case Constans.TREATMENT_HISTORY:
        return state.treatmentHistory;
      case Constans.TROUBLE:
        return state.trouble;
      case Constans.CONNECT:
        return state.connect;
      default:
        return "";
    }
  })();

  return (
    <div className={`card ${grow ? "grow" : ""}`}>
      <Tag name={tag} icon={true} item={item} changeIconBtn={changeIconBtn} />
      <p className="content w-80 p-tb">{content}</p>
    </div>
  );
};

export default LargeCard;
