import React from "react";
import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import BlogHeader from "@/Components/BlogHeader";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <BlogHeader/>
      <Footer />
    </div>
  );
}
