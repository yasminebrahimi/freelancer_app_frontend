import React, { useState } from "react";
import TextField from "../../ui/TextField";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8">
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
            <div className="flex items-center gap-x-2 text-secondary-600">
              <input
                className="cursor-pointer w-4 h-4 accent-red-500"
                type="radio"
                name="role"
                id="OWNER"
                value="OWNER"
              />
              <label htmlFor="OWNER">Owner</label>
            </div>
            <div className="flex items-center justify-center gap-x-1">
              <input
                className="cursor-pointer w-4 h-4 accent-red-500"
                type="radio"
                name="role"
                id="FREELANCER"
                value="FREELANCER"
              />
              <label htmlFor="FREELANCER">Freelancer</label>
            </div>
            <div></div>
          </div>
          <button className="btn btn--primary w-full">Verify</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
