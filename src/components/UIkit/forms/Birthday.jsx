import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import * as InitialState from "../../../reducers/initialState";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  formControl: {
    width: "45%",
  },
}));

const Birthday = ({ moon, day, moonHandleChange, dayHandleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="selectInputLabel">月</InputLabel>
        <Select
          labelId="selectInputLabel"
          id="selectInputLabelOutlined"
          value={moon}
          onChange={moonHandleChange}
          label="月"
        >
          {InitialState.moons.map((item, index) => {
            return (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="selectInputLabel">日</InputLabel>
        <Select
          labelId="selectInputLabel"
          id="selectInputLabelOutlined"
          value={day}
          onChange={dayHandleChange}
          label="日"
        >
          {InitialState.days.map((item, index) => {
            return (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Birthday;
