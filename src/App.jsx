import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import BookPage from "./Pages/BookPage";
import SignInPage from "./Pages/SignInPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Blog" element={<BlogPage />} />
            <Route path="/Booking" element={<BookPage />} />
            <Route path="/Signin" element={<SignInPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
