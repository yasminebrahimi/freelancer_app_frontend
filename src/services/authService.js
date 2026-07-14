import axios from "axios";
import http from "./httpService";

export function getOtp(data) {
  //{phoneNumber: "0400000000"}
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

// res.data => {data} => data.data
