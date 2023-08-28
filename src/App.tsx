import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Info from '/src/views/info'
import About from '/src/views/about'
import Skills from '/src/views/skills'
import Link from '/src/views/link'
import Projects from '/src/views/projects/index'
import Career from '/src/views/career/index'
import Footer from '/src/views/footer'
import Grid from '@mui/material/Grid';
import TopButton from '/src/components/topButton';
import { useRecoilState } from 'recoil';
import {isMobileState, isTabletState} from '/src/states/atoms'

const wrap = css`
	width: 100vw;
`
const content = (props: { isMobile: boolean, isTablet: boolean }) => css`
	min-width: ${props.isTablet ? '0px' : '1100px'};
	max-width: ${props.isTablet ? '100vw' : '1100px'};
	margin-left: ${props.isTablet ? '0' : 'auto'};
	margin-right: ${props.isTablet ? '0' : 'auto'};
	z-index: 2;
`
const info = css`
	background: url("images/bg2.png");
	background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
	height: 600px;
	width: 100%;
`

function App() {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);
	const [isTablet, setIsTablet] = useRecoilState(isTabletState);

  return (
    <div css={wrap}>
			<Grid container direction="column">
				<Grid container css={css`${info};`}>
					<Grid container css={css`${content({isMobile, isTablet})};`}>
						<Info />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;`}>
					<Grid container css={content({isMobile, isTablet})} id="about">
						<About />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;background-color:#5870f3;`}>
					<Grid container css={content({isMobile, isTablet})} id="skills">
						<Skills />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;background-color:#222;`}>
					<Grid container css={content({isMobile, isTablet})} id="link">
						<Link />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;background-color:#54acf9;`}>
					<Grid container css={content({isMobile, isTablet})} id="projects">
						<Projects />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;background-color:#efefef;`}>
					<Grid container css={content({isMobile, isTablet})} id="career">
						<Career />
					</Grid>
				</Grid>
				<Grid container css={css`width:100%;background-color:#222;`}>
					<Grid container css={content({isMobile, isTablet})}>
						<Footer />
					</Grid>
				</Grid>
			</Grid>
			<TopButton />
    </div>
  )
}

export default App
