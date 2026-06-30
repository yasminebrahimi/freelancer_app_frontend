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
        <button
          className="px-4 py-2 font-bold bg-primary-900
        text-white w-full rounded-xl transition-all duration-300
        hover:bg-primary-800 shodaw-lg shodaw-primary-300"
        >
          Send verification code
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;



