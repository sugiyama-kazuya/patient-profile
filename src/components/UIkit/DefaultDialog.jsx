import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppContext from "../../contexts/AppContext";
import { DIALOG_CLOSE } from "../../actions/index";
import * as Constans from "../../constans";
import {
  NameDialogContent,
  DiseaseNameDialogContent,
  TreatmentHistoryDialogContent,
  TroubleDialogContent,
  ConnectDialogContent,
  SexDialogContent,
  BirthdayDialogContent,
  ProfileImgContent,
  Preview,
} from "../index";

const DefaultDialog = () => {
  const { state, dispatch } = useContext(AppContext);
  const target = state.dialog.content;

  const content = (function () {
    switch (target) {
      case Constans.NAME:
        return <NameDialogContent />;
      case Constans.DISEASENAME:
        return <DiseaseNameDialogContent />;
      case Constans.TREATMENT_HISTORY:
        return <TreatmentHistoryDialogContent />;
      case Constans.TROUBLE:
        return <TroubleDialogContent />;
      case Constans.CONNECT:
        return <ConnectDialogContent />;
      case Constans.SEX:
        return <SexDialogContent />;
      case Constans.BIRTHDAY:
        return <BirthdayDialogContent />;
      case Constans.PROFILE_IMG:
        return <ProfileImgContent />;
      case Constans.PREVIEW_IMG:
        return <Preview />;
      default:
    }
  })();

  return (
    <Dialog
      open={state.dialog.isOpen}
      onClose={() => dispatch({ type: DIALOG_CLOSE })}
      fullWidth
      maxWidth="lg"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {content}
    </Dialog>
  );
};

export default DefaultDialog;
