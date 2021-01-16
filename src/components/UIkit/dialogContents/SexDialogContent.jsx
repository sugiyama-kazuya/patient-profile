import React, { useState, useContext } from "react";
import { DefaultButton, ReturnBackButton, SelectInput } from "../../index";
import AppContext from "../../../contexts/AppContext";
import * as Actions from "../../../actions/index";

const SexDialogContent = () => {
  const { dispatch } = useContext(AppContext);
  const [select, setSelect] = useState("");

  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const confirm = () => {
    dispatch({ type: Actions.SEX_INPUT, sex: select });
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  const returnBack = () => {
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  return (
    <div className="select">
      <div className="return-btn-wrapper">
        <ReturnBackButton onClick={returnBack} />
      </div>
      <SelectInput handleChange={handleChange} select={select} label={"性別"} />
      <div className="select-button__wrapper">
        <DefaultButton
          name={"確定する"}
          onClick={confirm}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default SexDialogContent;
