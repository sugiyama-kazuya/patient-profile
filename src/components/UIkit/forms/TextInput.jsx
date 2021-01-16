import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({
  label,
  placeholder,
  onChange,
  value,
  error,
  errorMsg,
  multiline = false,
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      placeholder={placeholder}
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      value={value}
      onChange={onChange}
      error={error}
      helperText={errorMsg}
      multiline={multiline}
      rows={multiline ? 10 : 1}
    />
  );
};

export default TextInput;
