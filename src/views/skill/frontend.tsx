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
        <Grid container css={css`border-bottom: 1px solid black;
          width: 150px;`} pt={1} mb={1}></Grid>
        <Grid container mb={1} gap={1} direction="row" alignContent="center">
          <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
        </Grid>
        <Grid container mb={1} gap={1} direction="row" alignContent="center">
          <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
        </Grid>
        <Grid container mb={1} gap={1} direction="row" alignContent="center">
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/Next.js-ffffff?style=for-the-badge&logo=next.js&logoColor=black" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/Material UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
        </Grid>
        <Grid container gap={1} direction="row" alignContent="center">
          <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
        </Grid>
        {/*{isTablet*/}
        {/*  ? isMobile*/}
        {/*    ? <img alt="frontend" src="images/frontend_mobile.png" css={css`width: 82vw;`} loading="lazy"/>*/}
        {/*    : <img alt="frontend" src="images/frontend.png" css={css`width: 90vw;`} loading="lazy"/>*/}
        {/*  : <img alt="frontend" src="images/frontend.png" css={css`width: 800px;`} loading="lazy"/>*/}
        {/*}*/}
      </Grid>
    </motion.div>
  )
}

export default Frontend