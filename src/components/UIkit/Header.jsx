import React, { useContext } from "react";
import { DefaultButton } from "../index";
import AppContext from "../../contexts/AppContext";
import {
  DIALOG_OPEN,
  HIDE_ELEMENTS_OPENING_PREVIEW,
} from "../../actions/index";
import * as Constans from "../../constans";
import HeaderLogo from "../../icons/header-logo.png";

const Header = ({ savePreview }) => {
  const { state, dispatch } = useContext(AppContext);
  const dialogTarget = Constans.PREVIEW_IMG;

  const dialogOpen = async () => {
    await dispatch({ type: HIDE_ELEMENTS_OPENING_PREVIEW });
    savePreview();
    dispatch({ type: DIALOG_OPEN, item: dialogTarget });
  };

  return (
    <header className="header">
      <div className="header-inner">
        <h1>
          <img
            src={HeaderLogo}
            width="23px"
            height="23px"
            className="header-icon"
            alt="ヘッダーのロゴ"
          />
          Patient Card
        </h1>
        <DefaultButton
          name={"preview"}
          onClick={dialogOpen}
          show={state.isPreview ? false : true}
        />
      </div>
    </header>
  );
};

export default Header;
