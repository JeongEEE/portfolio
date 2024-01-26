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
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Tooltip, {tooltipClasses, TooltipProps} from "@mui/material/Tooltip";
import {styled} from "@mui/material/styles";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 270,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const Backend = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const [isTablet, setIsTablet] = useRecoilState(isTabletState);
  const { ref, animation } = useObserver();
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={animation} variants={opacityVariants}>
      <Grid container p={3} mt={2} css={skillItem} direction="row">
        <Grid item container xs={isTablet? isMobile ?12 :5 :4} direction="column">
          <Typography variant="h4">Backend</Typography>
          <Grid container css={css`border-bottom:1px solid black;width:140px;`} pt={1} mb={1}></Grid>
          <Grid container mb={1} gap={1} direction="row" alignContent="center">
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
            <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
            <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          </Grid>
          {/*<img alt="backend" src="images/backend.png" css={css`width:${isMobile?'200px':'240px'};`} loading="lazy" />*/}
        </Grid>
        <Grid item container xs={isTablet? isMobile ?12 :7:5} direction="column">
          <Typography variant="h4">Deployment</Typography>
          <Grid container css={css`border-bottom:1px solid black;width:190px;`} pt={1} mb={1}></Grid>
          <Grid container mb={1} gap={1} direction="row" alignContent="center">
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
            <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
            <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
            <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" css={css`width: auto;height: 30px;`} loading="lazy" />
          </Grid>
          {/*<img alt="deploy" src="images/deploy.png" css={css`width:${isMobile?'80vw':'420px'};`} loading="lazy" />*/}
        </Grid>
        <Grid item container xs={isTablet? isMobile ?12 :6:3} direction="column">
          <Typography variant="h4">Certificate</Typography>
          <Grid container css={css`border-bottom:1px solid black;width:160px;`} pt={1} mb={1}></Grid>
          {isTablet
            ? <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip PopperProps={{ disablePortal: true, }}
                         onClose={handleTooltipClose} open={open} disableFocusListener
                         title="Validation Number: J60QQBM1RBRE1HSD"
                >
                  <img onClick={handleTooltipOpen} alt="aws" src="images/aws_cp.png" css={css`width:100px;`} loading="lazy" />
                </Tooltip>
              </div>
            </ClickAwayListener>
            : <HtmlTooltip title={
              <React.Fragment>
                <Typography variant="h6">AWS Certified Cloud Practitioner</Typography>
                <Typography variant="body1">Validation Number: J60QQBM1RBRE1HSD</Typography>
              </React.Fragment>
            }
            >
              <img alt="aws" src="images/aws_cp.png" css={css`width:100px;`} loading="lazy" />
            </HtmlTooltip>
          }
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Backend