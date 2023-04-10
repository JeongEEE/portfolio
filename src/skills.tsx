import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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

const Skills = () => {
	return (
		<Grid container>
			<Grid container direction="column" alignItems="center" pt={10} pb={15}
				css={css`color:black;`}>
				<Typography variant="h3">SKILLS</Typography>
				<Grid container css={css`border-bottom:5px solid white;width:70px;`} pt={2} mb={4}></Grid>
				<Grid container direction="column" alignItems="left">
					<Grid container p={3} css={skillItem} direction="column">
						<Typography variant="h4">Frontend</Typography>
						<Grid container css={css`border-bottom:1px solid black;width:150px;`} pt={1} mb={1}></Grid>
						<img alt="frontend" src="/src/assets/images/frontend.png" css={css`width:800px;`} />
					</Grid>
					<Grid container p={3} mt={2} css={skillItem} direction="row">
						<Grid item container xs={4} direction="column">
							<Typography variant="h4">Backend</Typography>
							<Grid container css={css`border-bottom:1px solid black;width:140px;`} pt={1} mb={1}></Grid>
							<img alt="backend" src="/src/assets/images/backend.png" css={css`width:240px;`} />
						</Grid>
						<Grid item container xs={5} direction="column">
							<Typography variant="h4">Deployment</Typography>
							<Grid container css={css`border-bottom:1px solid black;width:190px;`} pt={1} mb={1}></Grid>
							<img alt="deploy" src="/src/assets/images/deploy.png" css={css`width:420px;`} />
						</Grid>
						<Grid item container xs={3} direction="column">
							<Typography variant="h4">Certificate</Typography>
							<Grid container css={css`border-bottom:1px solid black;width:160px;`} pt={1} mb={1}></Grid>
							<img alt="aws" src="/src/assets/images/aws_cp.png" css={css`width:100px;`} />
						</Grid>
					</Grid>
					<Grid container p={3} mt={2} css={skillItem} direction="column">
						<Typography variant="h4">Etc</Typography>
						<Grid container css={css`border-bottom:1px solid black;width:60px;`} pt={1} mb={1}></Grid>
						<img alt="etc" src="/src/assets/images/etc.png" css={css`width:800px;`} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Skills