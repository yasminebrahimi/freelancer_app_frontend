import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import SendOTPForm from "./SendOTPFrom";
import CheckOTPForm from "./CheckOTPForm";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const { handleSubmit, register, getValues } = useForm();

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
            //onSubmit={sendOtpHandler}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );

      case 2:
        return (
          <CheckOTPForm
            onReSendOtp={sendOtpHandler}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
