import React, { useState, useContext } from "react";
import { Birthday, ReturnBackButton, DefaultButton } from "../../index";
import AppContext from "../../../contexts/AppContext";
import * as Actions from "../../../actions/index";

const BirthdayDialogContent = () => {
  const { dispatch } = useContext(AppContext);
  const [moon, setMoon] = useState("");
  const [day, setDay] = useState("");

  const moonHandleChange = (e) => {
    setMoon(e.target.value);
  };
  const dayHandleChange = (e) => {
    setDay(e.target.value);
  };

  const returnBack = () => {
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  const confirm = () => {
    const birthday = {
      moon,
      day,
    };

    dispatch({
      type: Actions.BIRTHDAY_INPUT,
      birthday,
    });
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  return (
    <div className="birthday-wrapper">
      <div className="return-btn-wrapper">
        <ReturnBackButton onClick={returnBack} />
      </div>
      <Birthday
        moon={moon}
        day={day}
        moonHandleChange={moonHandleChange}
        dayHandleChange={dayHandleChange}
      />
      <div className="select-button__wrapper">
        <DefaultButton
          name={"確定する"}
          onClick={confirm}
          disabled={moon && day ? false : true}
        />
      </div>
    </div>
  );
};

export default BirthdayDialogContent;
