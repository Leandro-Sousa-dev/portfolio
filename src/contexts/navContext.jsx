import React, { createContext, useState } from "react";

export const NavHContext = createContext({})

export const NavHProvider = ({children}) => {
      const [activeLink, setActiveLink] = useState()

      const handleNav = (link) => {
        setActiveLink(link)
      }
      
      return(
        <NavHContext.Provider value={{activeLink, handleNav}}>
            {children}
        </NavHContext.Provider>

      )
    
}