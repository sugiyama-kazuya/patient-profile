import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextInput, DefaultButton, ReturnBackButton } from "../../index";
import * as Actions from "../../../actions/index";
import AppContext from "../../../contexts/AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 10px 20px",
  },
  buttonLayout: {
    marginTop: "10px",
    textAlign: "center",
  },
  returnBtnLayout: {
    textAlign: "right",
    marginBottom: "10px",
  },
  count: {
    textAlign: "right",
    fontSize: "12px",
    letterSpacing: "0.05em",
    marginBottom: "5px",
  },
  countDanger: {
    color: "red",
  },
}));

const TextInputTemplate = ({
  innerState,
  countLength,
  confirm,
  inputMax,
  multiline = true,
}) => {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);

  const returnBack = () => {
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  return (
    <div className={classes.root}>
      <div className={classes.returnBtnLayout}>
        <ReturnBackButton onClick={returnBack} />
      </div>
      <TextInput
        className={classes.textField}
        label={innerState.label}
        placeholder={innerState.placeholder}
        value={innerState.name}
        onChange={countLength}
        error={innerState.isValidation}
        errorMsg={innerState.errorMsg}
        multiline={multiline}
      />
      <div
        className={`${classes.count} ${
          innerState.isValidation ? classes.countDanger : ""
        }`}
      >
        {innerState.count}/{inputMax}
      </div>
      <div className={classes.buttonLayout}>
        <DefaultButton
          onClick={confirm}
          name={"確定する"}
          disabled={innerState.disabled}
        />
      </div>
    </div>
  );
};

export default TextInputTemplate;
