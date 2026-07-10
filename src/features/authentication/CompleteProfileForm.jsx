import React, { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            label="First and Last Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              label="owner"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              id="OWNER"
              name="role"
              checked={role === "OWNER"}
            />
            <RadioInput
              label="freelancer"
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              id="FREELANCER"
              name="role"
              checked={role === "FREELANCER"}
            />

            {/* <div className="flex items-center justify-center gap-x-1">
              <input
                className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-blue-500"
                type="radio"
                name="role"
                id="FREELANCER"
                value="FREELANCER"
              />
              <label htmlFor="FREELANCER">Freelancer</label>
            </div> */}

            <div></div>
          </div>
          <button className="btn btn--primary w-full">Verify</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
