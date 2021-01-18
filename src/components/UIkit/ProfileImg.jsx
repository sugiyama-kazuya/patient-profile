import React, { useContext } from "react";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import * as Constans from "../../constans";
import AppContext from "../../contexts/AppContext";
import * as Actions from "../../actions/index";

const ProfileImg = () => {
  const { state, dispatch } = useContext(AppContext);
  const isPreview = state.isPreview;

  return (
    <div className="img-wrapper">
      <figure className="profile-img-wrapper">
        <img
          className="profile-img"
          src={state.profileImg}
          alt="プロフィール画像"
        />
      </figure>
      <CameraAltIcon
        className={`image-icon ${isPreview && "display-none"}`}
        onClick={() =>
          dispatch({ type: Actions.DIALOG_OPEN, item: Constans.PROFILE_IMG })
        }
      />
    </div>
  );
};

export default ProfileImg;
