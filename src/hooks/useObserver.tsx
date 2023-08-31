import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const UseObserver = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return { ref, animation };
}

export default UseObserver