import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOtpHandler = (e) => {
    e.preventDefault();
  };

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
