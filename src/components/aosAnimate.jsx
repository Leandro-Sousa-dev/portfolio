import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

export const AosAnimate = ({children})=> {
    
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
}