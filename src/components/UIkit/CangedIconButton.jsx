import React, { useContext } from "react";
import CachedIcon from "@material-ui/icons/Cached";
import AppContext from "../../contexts/AppContext";

const CangedIconButton = ({
  onClick,
  fontSize = "default",
  customStyle = "",
}) => {
  const { state } = useContext(AppContext);
  const isPreview = state.isPreview;
  return (
    <CachedIcon
      onClick={onClick}
      fontSize={fontSize}
      className={`changed-icon ${customStyle && customStyle} ${
        isPreview && "display-none"
      }`}
    />
  );
};

export default CangedIconButton;
