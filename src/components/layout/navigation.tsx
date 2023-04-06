import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const header = css`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
`
const content = css`
	max-width: 1100px;
	margin-left: auto;
	margin-right: auto;
	font-weight: bold;
`

const Navigation = () => {
	return (
		<header css={header}>
			<Grid container direction="row" css={content} justifyContent="space-between" alignItems="center">
				<Grid item container xs={2}>
					김규정 Portfolio
				</Grid>
				<Grid item container xs={10} direction="row" justifyContent="right" alignItems="center">
					<Grid item container xs={'auto'} mr={3}>About Me</Grid>
					<Grid item container xs={'auto'} mr={3}>Skills</Grid>
					<Grid item container xs={'auto'} mr={3}>Projects</Grid>
					<Grid item container xs={'auto'} mr={3}>Career</Grid>
				</Grid>
			</Grid>
		</header>
	)
}

export default Navigation