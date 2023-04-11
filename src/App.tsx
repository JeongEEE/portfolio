import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Info from '/src/views/info'
import About from '/src/views/about'
import Skills from '/src/views/skills'
import Link from '/src/views/link'
import Projects from '/src/views/projects/index'
import Career from '/src/views/career/index'
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import TopButton from '/src/components/topButton';

const wrap = css`
	width: 100vw;
`
const content = css`
	min-width: 1100px;
	max-width: 1100px;
	margin-left: auto;
	margin-right: auto;
	z-index: 2;
`
const info = css`
	background: url("/src/assets/images/bg2.png");
	background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
	height: 600px;
	width: 100%;
`

function App() {
	const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div css={wrap}>
			<Grid container direction="column">
				<Grid container css={css`${info};`}>
					<Grid container css={css`${content};`}>
						<Info />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;`}>
					<Grid container css={content}>
						<About />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;background-color:#5870f3;`}>
					<Grid container css={content}>
						<Skills />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;background-color:#222;`}>
					<Grid container css={content}>
						<Link />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;background-color:#54acf9;`}>
					<Grid container css={content}>
						<Projects />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;background-color:#efefef;`}>
					<Grid container css={content}>
						<Career />
					</Grid>
				</Grid>
			</Grid>
			<TopButton />
    </div>
  )
}

export default App
