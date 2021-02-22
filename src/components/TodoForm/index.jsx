import React from "react";
import PropTypes from "prop-types";
import InputForm from "../InputForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

TodoForm.propTypes = {};

function TodoForm(props) {
  const { onSubmit } = props;

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter title")
      .min(5, "title is too short"),
  });
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmitForm = (values) => {
    console.log("Todo Form", values);

    if (onSubmit) {
      onSubmit(values);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm)}>
      <InputForm name="title" label="Todo ne" form={form} />
    </form>
  );
}

export default TodoForm;
