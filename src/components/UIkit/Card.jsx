import React, { useContext } from "react";
import { Tag, CangedIconButton } from "../index";
import AppContext from "../../contexts/AppContext";
import { DIALOG_OPEN } from "../../actions/index";
import * as Constans from "../../constans";
import Name from "../../icons/name.png";
import Sex from "../../icons/sex.png";
import Birthday from "../../icons/birthday.png";

const Card = ({ tag, item, changeIconBtn = false }) => {
  const { state, dispatch } = useContext(AppContext);

  const icon = (function () {
    switch (item) {
      case Constans.NAME:
        return <img src={Name} className="icon" />;
      case Constans.SEX:
        return <img src={Sex} className="icon" />;
      case Constans.BIRTHDAY:
        return <img src={Birthday} className="icon" />;
      default:
        return <img src={Name} className="icon" />;
    }
  })();

  const content = (function () {
    switch (item) {
      case Constans.NAME:
        return state.name;
      case Constans.SEX:
        return state.sex;
      case Constans.BIRTHDAY:
        const birthday = state.birthday;
        if (birthday.moon && birthday.day) {
          return `${state.birthday.moon}月${state.birthday.day}日`;
        }
        return "";
      default:
        return "";
    }
  })();

  return (
    <div className="content-1__card">
      <div className="tag-side">
        {icon}
        <Tag name={tag} icon={false} />
      </div>
      <p className="content">
        {content}
        <span>
          <CangedIconButton
            onClick={() => dispatch({ type: DIALOG_OPEN, item })}
            className={changeIconBtn ? "diplay-none" : false}
          />
        </span>
      </p>
    </div>
  );
};

export default Card;
