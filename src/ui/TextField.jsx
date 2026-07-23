import React from "react";

function TextField({ label, name, register, type = "text", required }) {
  console.log(register(name));
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, {
          required: "title is required!",
          minLength: {
            value: 20,
            message: "title length 20...",
          },
        })}
        id={name}
        className="textField__input"
        type={type}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
