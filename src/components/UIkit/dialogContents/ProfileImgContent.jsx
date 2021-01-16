import React, { useContext } from "react";
import { ReturnBackButton } from "../../index";
import AppContext from "../../../contexts/AppContext";
import * as Actions from "../../../actions/index";

const ProfileImgContent = () => {
  const { state, dispatch } = useContext(AppContext);

  const change = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      dispatch({
        type: Actions.PROFILE_IMG_INPUT,
        img: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const returnBack = () => {
    dispatch({ type: Actions.DIALOG_CLOSE });
  };

  return (
    <div className="profile-content">
      <div className="return-btn-wrapper">
        <ReturnBackButton onClick={returnBack} />
      </div>

      <figure className="upload-img__wrapper">
        <img
          src={state.profileImg}
          className="upload-img"
          alt="プロフィール画像"
        />
      </figure>
      <div className="profile-input__wrapper">
        <label htmlFor="profile-input-id" className="profile-input__label">
          <input
            id="profile-input-id"
            type="file"
            accept="image/*"
            onChange={change}
            className="profile-input"
          />
          ファイルを選択
        </label>
      </div>
    </div>
  );
};

export default ProfileImgContent;
