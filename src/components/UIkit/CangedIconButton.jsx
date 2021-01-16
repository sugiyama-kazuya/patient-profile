import React from "react";
import CachedIcon from "@material-ui/icons/Cached";

const CangedIconButton = ({
  onClick,
  fontSize = "default",
  customStyle = false,
}) => {
  return (
    <CachedIcon
      onClick={onClick}
      fontSize={fontSize}
      className={`changed-icon ${customStyle && customStyle}`}
    />
  );
};

export default CangedIconButton;
