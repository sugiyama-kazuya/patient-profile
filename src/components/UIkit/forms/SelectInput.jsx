import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import * as Constans from "../../../constans";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  select: {
    width: "100%",
    marginTop: "10px",
  },
}));

const SelectInput = ({ handleChange, select, label }) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="selectInputLabel">{label}</InputLabel>
      <Select
        labelId="selectInputLabel"
        id="selectInputLabelOutlined"
        value={select}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value={Constans.MEN}>男性</MenuItem>
        <MenuItem value={Constans.WOMEN}>女性</MenuItem>
        <MenuItem value={Constans.UNPUBLISHED}>公開しない</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectInput;
