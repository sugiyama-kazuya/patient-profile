import React, { useContext, useState } from "react";
import { TextInputTemplate } from "../../index";
import AppContext from "../../../contexts/AppContext";
import * as Actions from "../../../actions/index";
import * as Constans from "../../../constans";

const ConnectDialogContent = () => {
  const { state, dispatch } = useContext(AppContext);

  const innerStates = {
    name: state.connect,
    count: state.connect.length,
    isValidation: false,
    errorMsg: "",
    disabled: false,
    label: "こんな人と繋がりたい！！",
    placeholder: "同じ病気の方と繋がりたい！！！",
  };

  const countValidation = (value) => {
    if (value > Constans.CONNECT_MAX) {
      return {
        isValidation: true,
        errorMsg: `${Constans.CONNECT_MAX}文字以内で入力してください。`,
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
    const connect = e.target.value;
    const currentState = innerState;
    const validation = countValidation(connect.length);
    setInnerState({
      ...currentState,
      ...validation,
      name: connect,
      count: connect.length,
    });
  };

  const confirm = () => {
    dispatch({
      type: Actions.CONNECT_INPUT,
      connect: innerState.name,
    });
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  const [innerState, setInnerState] = useState(innerStates);

  return (
    <TextInputTemplate
      innerState={innerState}
      countLength={countLength}
      confirm={confirm}
      inputMax={Constans.CONNECT_MAX}
    />
  );
};

export default ConnectDialogContent;
