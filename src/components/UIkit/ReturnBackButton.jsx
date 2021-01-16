import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const ReturnBackButton = ({ onClick }) => {
  return <CloseIcon onClick={onClick} />;
};

export default ReturnBackButton;
