import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";

function CreateProjectForm() {
  const [title, setTitle] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories } = useCategories();

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
      <RHFSelect
        label="category"
        required
        name="category"
        register={register}
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">Tag</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label={deadline} />
      <button type="submit" className="btn btn--primary w-full">
        Verify
      </button>
    </form>
  );
}

export default CreateProjectForm;
