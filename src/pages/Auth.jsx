import React from "react";
import SendOTPForm from "../features/authentication/sendOIPFrom";
import checkOTPForm from "../features/authentication/checkOTPForm";

function Auth() {
  return (
    <div className="w-full sm:max-w-sm">
      {/* <SendOTPForm /> */}
      <checkOTPForm />
    </div>
  );
}

export default Auth;
