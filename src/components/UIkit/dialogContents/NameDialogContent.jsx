import React, { useContext, useState } from "react";
import { TextInputTemplate } from "../../index";
import AppContext from "../../../contexts/AppContext";
import * as Actions from "../../../actions/index";
import * as Constans from "../../../constans";

const NameDialogContent = () => {
  const { state, dispatch } = useContext(AppContext);

  const innerStates = {
    name: state.name,
    count: state.name.length,
    isValidation: false,
    errorMsg: "",
    disabled: false,
    label: "名前",
    placeholder: "kazuya",
  };

  const [innerState, setInnerState] = useState(innerStates);

  const countValidation = (value) => {
    if (value > Constans.NAME_MAX) {
      return {
        isValidation: true,
        errorMsg: `${Constans.NAME_MAX}文字以内で入力してください。`,
        disabled: true,
      };
    } else {
      return {
        isValidation: false,
        errorMsg: "",
        disabled: false,
      };
    }
  };

  const countLength = (e) => {
    const name = e.target.value;
    const currentState = innerState;
    const validation = countValidation(name.length);
    setInnerState({ ...currentState, ...validation, name, count: name.length });
  };

  const confirm = () => {
    dispatch({ type: Actions.NAME_INPUT, name: innerState.name });
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  return (
    <TextInputTemplate
      innerState={innerState}
      countLength={countLength}
      confirm={confirm}
      inputMax={Constans.NAME_MAX}
      multiline={false}
    />
  );
};

export default NameDialogContent;
