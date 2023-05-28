import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import Alert from "./Alert";
const Navbar = () => {
  const [isMounted, setisMounted] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [viewAlert, setViewAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  const toggleTheme = () => {};
  const handleSignOut = () => {};
  const handleSignIn = () => {};
  return (
    <>
      <header>
      
      </header>
    </>
  );
};

export { Navbar };
