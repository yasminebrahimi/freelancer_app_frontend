import React from "react";
import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map((option) => (
          <RadioInput
            key={options.value}
            label={options.label}
            value={options.value}
            id={options.id}
            name={option.name}
            register={option.register}
            watch={option.watch}
            validationSchema={option.validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2 flex-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
