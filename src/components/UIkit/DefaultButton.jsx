import React from "react";
import "../../styles/App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const DefaultButton = ({
  name,
  onClick,
  disabled,
  show = true,
  size = "small",
}) => {
  return (
    <div className={show ? "" : "display-none"}>
      <Button
        size={size}
        variant="contained"
        color="secondary"
        startIcon={<SaveIcon />}
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </Button>
    </div>
  );
};

export default DefaultButton;
