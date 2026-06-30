import React, { useState } from "react";
import OTPInput from "react-otp-input";

function checkOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form>
        <p className="font-bold text-secondary-800">
          Enter the verification code
          <OTPInput
            value="otp"
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input type="number" {...props} />}
          />
        </p>
      </form>
    </div>
  );
}

export default checkOTPForm;
