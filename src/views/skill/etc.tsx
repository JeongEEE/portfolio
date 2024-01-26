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

const Etc = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const [isTablet, setIsTablet] = useRecoilState(isTabletState);
  const { ref, animation } = useObserver();

  return (
    <motion.div ref={ref} initial="hidden" animate={animation} variants={opacityVariants}>
      <Grid container p={3} mt={2} css={skillItem} direction="column">
        <Typography variant="h4">Etc</Typography>
        <Grid container css={css`border-bottom:1px solid black;width:60px;`} pt={1} mb={1}></Grid>
        <Grid container mb={1} gap={1} direction="row" alignContent="center">
          <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/Gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/Synology-B5B5B6?style=for-the-badge&logo=synology&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          <img src="https://img.shields.io/badge/Redmine-B32024?style=for-the-badge&logo=redmine&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
        </Grid>
        {/*{isTablet*/}
        {/*  ? isMobile*/}
        {/*    ? <img alt="frontend" src="images/etc_mobile.png" css={css`width:82vw;`} loading="lazy" />*/}
        {/*    : <img alt="frontend" src="images/etc.png" css={css`width:90vw;`} loading="lazy" />*/}
        {/*  : <img alt="frontend" src="images/etc.png" css={css`width:800px;`} loading="lazy" />*/}
        {/*}*/}
      </Grid>
    </motion.div>
  )
}

export default Etc