import React, { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast.error("Your profile is waiting to verify", { icon: "👏" });
        return;
      }

      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
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
              label="Owner"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              id="OWNER"
              name="role"
              checked={role === "OWNER"}
            />
            <RadioInput
              label="Freelancer"
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
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                Verify
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
