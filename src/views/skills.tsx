import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import {isMobileState, isTabletState} from '/src/states/atoms'
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {opacityVariants} from "/src/utils/animate";
import { motion } from 'framer-motion';
import Frontend from "/src/views/skill/frontend";
import Backend from "/src/views/skill/backend";
import Etc from "/src/views/skill/etc";

const Skills = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);
	const [isTablet, setIsTablet] = useRecoilState(isTabletState);
	const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

	return (
		<Grid container>
			<Grid container direction="column" alignItems="center"
						p={isTablet ? isMobile ? 0 : 2 : 0} pt={10} pb={15}
				css={css`color:white;`}>
				<Typography variant="h3">SKILLS</Typography>
				<Grid container css={css`border-bottom:5px solid white;width:70px;`} pt={2} mb={4}></Grid>
				<Grid container direction="column" alignItems="left" p={isMobile?1:0}>
					<Frontend />
					<Backend />
					<Etc />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Skills