import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const item = css`
	border-radius: 10px;
	background-color:white;
	box-shadow: 4px 4px 5px 4px rgba(70,70,70,0.2);
	color: #837df6;
`
const url = css`
	&:hover {
		text-decoration: underline;
	}
`

const Resume = () => {
	return (
		<Grid container p={3} css={item} direction="column" alignItems="center">
			<Typography variant="h4" css={css`color:black;`}>웹 이력서</Typography>
			<Typography variant="h6" css={css`color:gray;`}>2022.06</Typography>
			<Grid mt={2} container direction="row" alignItems="start">
				<Grid item container xs={7} pr={1}>
					<Carousel autoPlay={false} css={css`width:100%;`}>
						<img css={css`width:100%;height:350px;`} src="/src/assets/images/bg1.png" alt="bg1" />
						<img css={css`width:100%;height:350px;`} src="/src/assets/images/bg2.png" alt="bg2" />
					</Carousel>
				</Grid>
				<Grid item container xs={5} direction="column">
					<Grid container pb={1} direction="row" alignItems="center">
						<Grid item container xs={4} alignItems="center">
							<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
							<Typography variant="h6" css={css`color:black;`}>GitHub</Typography>
						</Grid>
						<Grid item container xs={8}>

						</Grid>
					</Grid>
					<Grid container pb={1} direction="row" alignItems="center">
						<Grid item container xs={4} alignItems="center">
							<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
							<Typography variant="h6" css={css`color:black;`}>URL</Typography>
						</Grid>
						<Grid item container xs={8}>

						</Grid>
					</Grid>
					<Grid container pb={1} direction="row" alignItems="center">
						<Grid item container xs={4} alignItems="center">
							<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
							<Typography variant="h6" css={css`color:black;`}>기술스택</Typography>
						</Grid>
						<Grid item container xs={8}>
							
						</Grid>
					</Grid>
					<Grid container pb={1} direction="row" alignItems="center">
						<Grid item container xs={4} alignItems="center">
							<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
							<Typography variant="h6" css={css`color:black;`}>주요기능</Typography>
						</Grid>
						<Grid item container xs={8}>
							
						</Grid>
					</Grid>
					<Grid container css={css`border-bottom:1px solid gray;`} mb={1}></Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Resume