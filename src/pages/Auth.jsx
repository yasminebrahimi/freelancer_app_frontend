import React from "react";
import SendOTPForm from "../features/authentication/sendOIPFrom";
import checkOTPForm from "../features/authentication/checkOTPForm";

function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        {/* <SendOTPForm /> */}
        <checkOTPForm />
      </div>
    </div>
  );
}

export default Auth;
