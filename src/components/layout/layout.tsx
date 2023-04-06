import React, { Fragment, useState, useEffect } from 'react'
import Navigation from './navigation'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';

const layout = css`
	padding-top: 70px;
`

const Layout = (props: any) => {
	return (
		<Fragment>
			<Grid container css={layout}>
				<Navigation />
				<main>{props.children}</main>
			</Grid>
    </Fragment>
	)
}

export default Layout