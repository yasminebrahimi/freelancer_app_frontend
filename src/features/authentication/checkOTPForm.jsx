import React, { useState } from "react";
import OTPInput from "react-otp-input";

function checkOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form className="space-y-10">
        <p className="font-bold text-secondary-800">
          Enter the verification code
          <OTPInput
            value="otp"
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input type="number" {...props} />}
            containerStyle="felx flex-row-reverse gap-x-2 justify-center"
            inputStyle={{
              width: "2.5rem",
              padding: "0.5rem 0.2rem",
              border: "1px solid rgb(var(--color--primary-300))",
              borderRadius: "0.5rem",
            }}
          />
          <button className="btn btn--primary w-full"> Verify </button>
        </p>
      </form>
    </div>
  );
}

export default checkOTPForm;
