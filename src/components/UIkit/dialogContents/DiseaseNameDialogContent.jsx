import React, { useContext, useState } from "react";
import { TextInputTemplate } from "../../index";
import AppContext from "../../../contexts/AppContext";
import * as Actions from "../../../actions/index";
import * as Constans from "../../../constans";

const DiseaseNameDialogContent = () => {
  const { state, dispatch } = useContext(AppContext);

  const innerStates = {
    name: state.diseaseName,
    count: state.diseaseName.length,
    isValidation: false,
    errorMsg: "",
    disabled: false,
    label: "病名",
    placeholder: "悪性リンパ腫",
  };

  const [innerState, setInnerState] = useState(innerStates);

  const countValidation = (value) => {
    if (value > Constans.DISEASE_NAME_MAX) {
      return {
        isValidation: true,
        errorMsg: `${Constans.DISEASE_NAME_MAX}文字以内で入力してください。`,
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
    const diseaseName = e.target.value;
    const currentState = innerState;
    const validation = countValidation(diseaseName.length);
    setInnerState({
      ...currentState,
      ...validation,
      name: diseaseName,
      count: diseaseName.length,
    });
  };

  const confirm = () => {
    dispatch({
      type: Actions.DISEASE_NAME_INPUT,
      diseaseName: innerState.name,
    });
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  return (
    <TextInputTemplate
      innerState={innerState}
      countLength={countLength}
      confirm={confirm}
      inputMax={Constans.DISEASE_NAME_MAX}
    />
  );
};

export default DiseaseNameDialogContent;
