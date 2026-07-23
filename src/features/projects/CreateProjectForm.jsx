import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {
  const [title, setTitle] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Project Name"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "Title is necessary",
          minLength: {
            value: 10,
            message: "Invalid title length",
          },
        }}
        errors={errors}
      />
      <button type="submit" className="btn btn--primary w-full">
        Verify
      </button>
    </form>
  );
}

export default CreateProjectForm;
