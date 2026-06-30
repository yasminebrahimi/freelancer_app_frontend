import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="container xl:max-w-screen-xl">
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
    </div>
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
// 3. react-query => redux alrernative (remote states), fetch (get), mutate (post)



// feature based driven folder structure=> 
// features: 
// projects
// proposal -> (components, hooks, context, ...)
// authentication 
// category 
// users 
// tnx 
// ... 
// cart 
// comment 
