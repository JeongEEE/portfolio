import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const skillItem = css`
	border-radius: 10px;
	background-color:white;
	box-shadow: 4px 4px 5px 4px rgba(70,70,70,0.2);
	color: #837df6;
	&:hover {
		transform: scale(1.025);
		transition-duration: 0.3s;
		z-index: 3;
		box-shadow: 1px 1px 1px 1px rgba(70,70,70,0.2);
		color: blue;
	}
`
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

const Skills = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);
	const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

	return (
		<Grid container>
			<Grid container direction="column" alignItems="center" pt={10} pb={15}
				css={css`color:white;`}>
				<Typography variant="h3">SKILLS</Typography>
				<Grid container css={css`border-bottom:5px solid white;width:70px;`} pt={2} mb={4}></Grid>
				<Grid container direction="column" alignItems="left" p={isMobile?1:0}>
					<Grid container p={3} css={skillItem} direction="column">
						<Typography variant="h4">Frontend</Typography>
						<Grid container css={css`border-bottom:1px solid black;width:150px;`} pt={1} mb={1}></Grid>
						{isMobile
							? <img alt="frontend" src="images/frontend_mobile.png" css={css`width:82vw;`} loading="lazy" />
							: <img alt="frontend" src="images/frontend.png" css={css`width:800px;`} loading="lazy" />
						}
					</Grid>
					<Grid container p={3} mt={2} css={skillItem} direction="row">
						<Grid item container xs={isMobile?12:4} direction="column">
							<Typography variant="h4">Backend</Typography>
							<Grid container css={css`border-bottom:1px solid black;width:140px;`} pt={1} mb={1}></Grid>
							<img alt="backend" src="images/backend.png" css={css`width:${isMobile?'200px':'240px'};`} loading="lazy" />
						</Grid>
						<Grid item container xs={isMobile?12:5} direction="column">
							<Typography variant="h4">Deployment</Typography>
							<Grid container css={css`border-bottom:1px solid black;width:190px;`} pt={1} mb={1}></Grid>
							<img alt="deploy" src="images/deploy.png" css={css`width:${isMobile?'80vw':'420px'};`} loading="lazy" />
						</Grid>
						<Grid item container xs={isMobile?12:3} direction="column">
							<Typography variant="h4">Certificate</Typography>
							<Grid container css={css`border-bottom:1px solid black;width:160px;`} pt={1} mb={1}></Grid>
							{isMobile
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
					<Grid container p={3} mt={2} css={skillItem} direction="column">
						<Typography variant="h4">Etc</Typography>
						<Grid container css={css`border-bottom:1px solid black;width:60px;`} pt={1} mb={1}></Grid>
						{isMobile
							? <img alt="frontend" src="images/etc_mobile.png" css={css`width:82vw;`} loading="lazy" />
							: <img alt="frontend" src="images/etc.png" css={css`width:800px;`} loading="lazy" />
						}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Skills