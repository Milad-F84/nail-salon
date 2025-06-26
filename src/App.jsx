import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import BookPage from "./Pages/BookPage";
import ContactUsPage from "./Pages/ContactUsPage";
import LogInPage from "./Pages/LogInPage";
import useAuthStore from "./store/authStore";
import ProtectedRoutes from "./route/ProtectedRoutes";

function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Blog" element={<BlogPage />} />
            <Route
              path="/Booking"
              element={
                <ProtectedRoutes>
                  <BookPage />
                </ProtectedRoutes>
              }
            />
            <Route path="/Contact" element={<ContactUsPage />} />
            <Route
              path="/Login"
              element={isLoggedIn ? <Navigate to={"/Booking"} /> : <LogInPage />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
