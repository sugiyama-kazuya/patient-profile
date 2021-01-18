import * as Actions from "../actions/index";

const eventReducer = (state, action) => {
  switch (action.type) {
    case Actions.DIALOG_OPEN:
      return { ...state, dialog: { isOpen: true, content: action.item } };
    case Actions.HIDE_ELEMENTS_OPENING_PREVIEW:
      return { ...state, isPreview: true };
    case Actions.DIALOG_CLOSE:
      return {
        ...state,
        dialog: { isOpen: false, content: "" },
        isPreview: false,
      };
    case Actions.NAME_INPUT:
      return { ...state, name: action.name };
    case Actions.SEX_INPUT:
      return { ...state, sex: action.sex };
    case Actions.BIRTHDAY_INPUT:
      return {
        ...state,
        birthday: { moon: action.birthday.moon, day: action.birthday.day },
      };
    case Actions.PROFILE_IMG_INPUT:
      return {
        ...state,
        profileImg: action.img,
      };
    case Actions.DISEASE_NAME_INPUT:
      return { ...state, diseaseName: action.diseaseName };
    case Actions.TREATMENT_HISTORY_INPUT:
      return { ...state, treatmentHistory: action.treatmentHistory };
    case Actions.TROUBLE_INPUT:
      return { ...state, trouble: action.trouble };
    case Actions.CONNECT_INPUT:
      return { ...state, connect: action.connect };
    case Actions.CREATE_PREVIEW_IMG:
      return;
    case Actions.SAVE_PREVIEW:
      return {
        ...state,
        previewData: action.imageurl,
      };
    default:
      return;
  }
};

export default eventReducer;
