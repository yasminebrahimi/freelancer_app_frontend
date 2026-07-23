import { useState } from "react";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, register }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          register={register}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              Send verification code
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
