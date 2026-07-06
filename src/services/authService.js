import axios from "axios";
import http from "./httpService";

export function getOtp(data) {
  //{phoneNumber: "0400000000"}
  return http.post("/user/get-otp", data);
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data);
}
