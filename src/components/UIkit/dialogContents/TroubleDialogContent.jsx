import React, { useContext, useState } from "react";
import { TextInputTemplate } from "../../index";
import AppContext from "../../../contexts/AppContext";
import * as Actions from "../../../actions/index";
import * as Constans from "../../../constans";

const TroubleDialogContent = () => {
  const { state, dispatch } = useContext(AppContext);

  const innerStates = {
    name: state.trouble,
    count: state.trouble.length,
    isValidation: false,
    errorMsg: "",
    disabled: false,
    label: "悩み",
    placeholder: "メンタル面が弱い。",
  };

  const countValidation = (value) => {
    if (value > Constans.TROUBLE_MAX) {
      return {
        isValidation: true,
        errorMsg: `${Constans.TROUBLE_MAX}文字以内で入力してください。`,
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
    const trouble = e.target.value;
    const currentState = innerState;
    const validation = countValidation(trouble.length);
    setInnerState({
      ...currentState,
      ...validation,
      name: trouble,
      count: trouble.length,
    });
  };

  const confirm = () => {
    dispatch({
      type: Actions.TROUBLE_INPUT,
      trouble: innerState.name,
    });
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  const [innerState, setInnerState] = useState(innerStates);

  return (
    <TextInputTemplate
      innerState={innerState}
      countLength={countLength}
      confirm={confirm}
      inputMax={Constans.TROUBLE_MAX}
    />
  );
};

export default TroubleDialogContent;
