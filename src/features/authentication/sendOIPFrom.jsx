import { useState } from "react";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <div>
          <label className="mb-1" htmlFor="">
            Phone Number
          </label>
          <input
            id="phonenumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="textField__input"
            type="text"
          />
        </div>
        <button className="btn btn--primary w-full">
          Send verification code
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
