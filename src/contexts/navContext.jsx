import React, { createContext, useState } from "react";

export const NavHContext = createContext({})

export const NavHProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState()

  const handleNav = (link) => {
    setActiveLink(link)
  }


  const handleClick = (event, to) => {

    event.preventDefault();
    const targetElement = document.querySelector(to);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <NavHContext.Provider value={{ activeLink, handleNav, handleClick }}>
      {children}
    </NavHContext.Provider>

  )

}