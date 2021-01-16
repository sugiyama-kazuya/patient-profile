import React, { useContext, useState } from "react";
import { TextInputTemplate } from "../../index";
import AppContext from "../../../contexts/AppContext";
import * as Actions from "../../../actions/index";
import * as Constans from "../../../constans";

const TreatmentHistoryDialogContent = () => {
  const { state, dispatch } = useContext(AppContext);

  const innerStates = {
    name: state.treatmentHistory,
    count: state.treatmentHistory.length,
    isValidation: false,
    errorMsg: "",
    disabled: false,
    label: "治療歴",
    placeholder: "抗がん剤6クール、放射線",
  };

  const countValidation = (value) => {
    if (value > Constans.TREATMENT_HISTORY_MAX) {
      return {
        isValidation: true,
        errorMsg: `${Constans.TREATMENT_HISTORY_MAX}文字以内で入力してください。`,
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
    const treatmentHistory = e.target.value;
    const currentState = innerState;
    const validation = countValidation(treatmentHistory.length);
    setInnerState({
      ...currentState,
      ...validation,
      name: treatmentHistory,
      count: treatmentHistory.length,
    });
  };

  const confirm = () => {
    dispatch({
      type: Actions.TREATMENT_HISTORY_INPUT,
      treatmentHistory: innerState.name,
    });
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  const [innerState, setInnerState] = useState(innerStates);

  return (
    <TextInputTemplate
      innerState={innerState}
      countLength={countLength}
      confirm={confirm}
      inputMax={Constans.TREATMENT_HISTORY_MAX}
    />
  );
};

export default TreatmentHistoryDialogContent;
