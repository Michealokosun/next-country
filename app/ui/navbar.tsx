"use client";
import { useTheme } from "next-themes";
import React from "react";

export const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleclick = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    }

    if (resolvedTheme === "light") {
      setTheme("dark");
    }
  };
  return (
    <div className="sm:container   flex justify-between items-center mx-auto px-4 ">
      <div className="nav-logo-text">
        <h1 className="capitalize font-bold">where in the world?</h1>
      </div>

      <div
        onClick={handleclick}
        className="capitalize dark:text-white cursor-pointer  flex items-center gap-1 text-slate-600"
      >
        <span>
          {resolvedTheme === "dark" ? (
            <i className="bi bi-cloud-sun"></i>
          ) : (
            <i className="bi bi-cloud-moon-fill"></i>
          )}
        </span>
        <p className=" text-sm">
          {resolvedTheme === "light" ? "darkmode" : "light"}
        </p>
      </div>
    </div>
  );
};
