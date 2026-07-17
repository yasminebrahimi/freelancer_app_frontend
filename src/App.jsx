import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AppLauout from "./ui/AppLauout";
import OwnerDashbaord from "./pages/OwnerDashbaord";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />

        <Route path="owner" element={<AppLauout />}>
          <Route path="dashboard" element={<OwnerDashbaord />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project" element={<Project />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
