import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-scroll';

const header = (props) => css`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	z-index: 5;
	box-shadow: ${props.show ? '2px 2px 2px 0px grey' : 'none'};
	color: ${props.show ? 'black' : 'white'};
	background-color: ${props.show ? 'white' : 'transparent'};
`
const content = css`
	max-width: 1100px;
	min-width: 1100px;
	margin-left: auto;
	margin-right: auto;
	font-weight: bold;
`
const nav = css`
	cursor: pointer;
	&:hover {
		color: blue;
	}
`

const Navigation = ({show}) => {

	const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
	const scrollToBottom = (bottom) => {
    window.scrollTo({ top: bottom, behavior: 'smooth' });
  }

	return (
		<header css={header({show})}>
			<Grid container direction="row" css={content} justifyContent="space-between" alignItems="center">
				<Grid item container xs={2} css={css`${nav};font-size:1.5rem;`}
					onClick={scrollToTop}>
					김규정 Portfolio
				</Grid>
				<Grid item container xs={10} direction="row" justifyContent="right" alignItems="center">
					<Link to="about" spy={true} smooth={true}>
						<Grid item container xs={'auto'} mr={3} css={nav}>About Me</Grid>
					</Link>
					<Link to="skills" spy={true} smooth={true}>
						<Grid item container xs={'auto'} mr={3} css={nav}>Skills</Grid>
					</Link>
					<Link to="link" spy={true} smooth={true}>
						<Grid item container xs={'auto'} mr={3} css={nav}>Link</Grid>
					</Link>
					<Link to="projects" spy={true} smooth={true}>
						<Grid item container xs={'auto'} mr={3} css={nav}>Projects</Grid>
					</Link>
					<Link to="career" spy={true} smooth={true}>
						<Grid item container xs={'auto'} mr={3} css={nav}>Career</Grid>
					</Link>
				</Grid>
			</Grid>
		</header>
	)
}

export default Navigation