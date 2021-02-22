import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputForm.propTypes = {};

function InputForm(props) {
  const { form, name, label, disabled } = props;
  const { errors, formState } = form;
  const hasError = formState.touched[name] && errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      /// Under will in TextFile of library Material-UI
      fullWidth
      label={label}
      disabled={disabled}
      error={hasError > 0}
      helperText={errors[name]?.message}
    ></Controller>
  );
}

export default InputForm;
