import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {
  const [title, setTitle] = useState("");

  const { register } = useForm();

  return;
  <form className="">
    <TextField label="Project Name" name="title" register={register} 
    />
  </form>;
}

export default CreateProjectForm;
