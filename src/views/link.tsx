import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'

const item = css`
	border-radius: 10px;
	background-color:white;
	box-shadow: 4px 4px 5px 4px rgba(70,70,70,0.2);
	color: #837df6;
  cursor: pointer;
	&:hover {
		transform: scale(1.025);
		transition-duration: 0.3s;
		z-index: 3;
		box-shadow: 1px 1px 1px 1px rgba(70,70,70,0.2);
		color: blue;
	}
`
const url = css`
	&:hover {
		text-decoration: underline;
	}
`

const LinkPage = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);

	return (
		<Grid container>
			<Grid container direction="column" alignItems="center" pt={10} pb={15}
				css={css`color:black;`}>
				<Typography variant="h3" css={css`color:white;`}>LINK</Typography>
				<Grid container css={css`border-bottom:5px solid white;width:70px;`} pt={2} mb={4}></Grid>
				<Grid container direction="column" alignItems="left" p={isMobile?1:0}>
					<Grid container p={2} pt={1} pb={1} css={item} direction="row" alignItems="center"
						onClick={() => window.open('https://github.com/JeongEEE', '_blank')}>
						<img alt="github" src="images/github.png" css={css`width:150px;`} />
						<Typography variant="h6" css={css`color:blue;padding-top:7px;${url};`}>
							{'https://github.com/JeongEEE'}
						</Typography>
					</Grid>
					{/* <Grid container p={2} mt={2} css={item} direction="row" alignItems="center"
						onClick={() => window.open('https://jeongeee.github.io/resume', '_blank')}>
						<Grid item container xs={'auto'} pl={1} pr={2} direction="row" alignItems="center">
							<LinkIcon fontSize="large" sx={{ color: 'black' }} />
							<Typography variant="h6" css={css`color:black;margin-left:7px;`}>웹 이력서</Typography>
						</Grid>
						<Typography variant="h6" css={css`color:blue;${url};`}>
							{'https://jeongeee.github.io/resume'}
						</Typography>
					</Grid> */}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default LinkPage