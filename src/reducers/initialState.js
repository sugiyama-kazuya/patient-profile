import defaultImg from "../images/default-img.png";

export const initialState = {
  dialog: {
    isOpen: false,
    content: "",
  },
  name: "",
  sex: "",
  birthday: {
    moon: "",
    day: "",
  },
  profileImg: defaultImg,
  diseaseName: "",
  treatmentHistory: "",
  trouble: "",
  connect: "",
  previewData: null,
  isPreview: false,
  isFirstDialog: false,
};

export const moons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

export const days = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];
