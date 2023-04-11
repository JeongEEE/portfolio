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
  cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`

const Portfolio = () => {
	return (
		<Grid container p={3} mb={4} css={item} direction="column" alignItems="center">
			<Typography variant="h4" css={css`color:black;`}>웹 포트폴리오</Typography>
			<Typography variant="h6" css={css`color:gray;`}>2023.04</Typography>
			<Grid mt={2} container direction="row" alignItems="start">
				<Grid item container xs={6} pr={1}>
					<Carousel autoPlay={false} css={css`width:100%;`}>
						<img css={css`width:100%;height:350px;`} src="images/port1.png" alt="port1" />
						<img css={css`width:100%;height:350px;`} src="images/port2.png" alt="port2" />
						<img css={css`width:100%;height:350px;`} src="images/port3.png" alt="port3" />
						<img css={css`width:100%;height:350px;`} src="images/port4.png" alt="port4" />
					</Carousel>
				</Grid>
				<Grid item container xs={6} pl={1} direction="column" css={css`color:black;`}>
					<Grid container pb={1} direction="row" alignItems="center">
						<Grid item container xs={3} alignItems="center">
							<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
							<Typography variant="h6">GitHub</Typography>
						</Grid>
						<Grid item container xs={9}
							onClick={() => window.open('https://github.com/JeongEEE/portfolio', '_blank')}>
							<Typography variant="h7" css={css`color:blue;${url};`}>
								{'https://github.com/JeongEEE/portfolio'}
							</Typography>
						</Grid>
					</Grid>
					<Grid container pb={1} direction="row" alignItems="center">
						<Grid item container xs={3} alignItems="center">
							<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
							<Typography variant="h6">URL</Typography>
						</Grid>
						<Grid item container xs={9}>

						</Grid>
					</Grid>
					<Grid container pb={1} direction="row" alignItems="start">
						<Grid item container xs={3} alignItems="center">
							<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
							<Typography variant="h6">기술스택</Typography>
						</Grid>
						<Grid item container xs={9}>
							<Typography variant="h6">React, Typescript, Vite, Material UI, Emotion, Firebase</Typography>
						</Grid>
					</Grid>
					<Grid container pb={1} direction="row" alignItems="start">
						<Grid item container xs={3} alignItems="center">
							<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
							<Typography variant="h6">주요기능</Typography>
						</Grid>
						<Grid item container xs={9}>
							<Typography variant="h6">자기소개, 인적사항, 기술 스택, 프로젝트 경험, 업무 경력</Typography>
						</Grid>
					</Grid>
					<Grid container css={css`border-bottom:1px solid gray;`} mb={1}></Grid>
					<Typography variant="h6">제출과 열람이 편리하도록 개발한 포트폴리오 웹사이트 입니다.</Typography>
					<Typography variant="h6">Vite를 사용하여 React로 개발하였습니다.</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Portfolio