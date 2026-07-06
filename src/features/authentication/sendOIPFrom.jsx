import { useState } from "react";
import TextField from "../../ui/TextField";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // useQuer => get
  //useMutation => post, put, delete

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="btn btn--primary w-full">
          Send verification code
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
