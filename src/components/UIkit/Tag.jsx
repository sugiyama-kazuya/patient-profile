import React, { useContext } from "react";
import { CangedIconButton } from "../index";
import AppContext from "../../contexts/AppContext";
import { DIALOG_OPEN } from "../../actions/index";

const Tag = ({ name, icon, item = "", changeIconBtn }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <span className="tag">
      {name}
      {icon && (
        <CangedIconButton
          onClick={() => dispatch({ type: DIALOG_OPEN, item })}
          customStyle={"change-icon-position"}
        />
      )}
    </span>
  );
};

export default Tag;
