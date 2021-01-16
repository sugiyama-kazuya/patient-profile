import React, { useContext } from "react";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import * as Constans from "../../constans";
import AppContext from "../../contexts/AppContext";
import * as Actions from "../../actions/index";

const ProfileImg = ({ changeIconBtn = false }) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="img-wrapper">
      <img className="profile-img" src={state.profileImg} alt="" />
      <CameraAltIcon
        className={`image-icon ${changeIconBtn ? "diplay-none" : false}`}
        onClick={() =>
          dispatch({ type: Actions.DIALOG_OPEN, item: Constans.PROFILE_IMG })
        }
      />
    </div>
  );
};

export default ProfileImg;
