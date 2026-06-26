import React from "react";

function App() {
  return (
    <h1 className=" container text-3xl bg-opacity-80 text-error bg-primary-900">
      Hello world!
    </h1>
  );
}

export default App;


// auth 
// Task: #1: auth user via OTP : one-time-password
// 1. form -> getOTP -> input -> button => phoneNumber => send OTP
// 2. form -> checkOTP -> request -> (OTP, phoneNumber)


// request => 
  // 1. axios (useState, useEffect)
// 2. useFetch (data, loading, error)
// 3. react-query => redux alrernative (remote states). fetch (get). mutate (post)