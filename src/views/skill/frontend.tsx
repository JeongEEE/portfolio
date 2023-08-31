import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {useRecoilState} from "recoil";
import {isMobileState, isTabletState} from "/src/states/atoms";
import useObserver from "/src/hooks/useObserver";
import { motion } from 'framer-motion';
import {opacityVariants} from "/src/utils/animate";
import {skillItem} from "/src/styles/global";

const Frontend = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const [isTablet, setIsTablet] = useRecoilState(isTabletState);
  const { ref, animation } = useObserver();

  return (
    <motion.div ref={ref} initial="hidden" animate={animation} variants={opacityVariants}>
      <Grid container p={3} css={skillItem} direction="column">
        <Typography variant="h4">Frontend</Typography>
        <Grid container css={css`border-bottom:1px solid black;width:150px;`} pt={1} mb={1}></Grid>
        {isTablet
          ? isMobile
            ? <img alt="frontend" src="images/frontend_mobile.png" css={css`width:82vw;`} loading="lazy" />
            : <img alt="frontend" src="images/frontend.png" css={css`width:90vw;`} loading="lazy" />
          : <img alt="frontend" src="images/frontend.png" css={css`width:800px;`} loading="lazy" />
        }
      </Grid>
    </motion.div>
  )
}

export default Frontend