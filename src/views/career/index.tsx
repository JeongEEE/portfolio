import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Jarasoft from './jarasoft';
import Aloys from './aloys';
import Beyless from './beyless'

const Career = () => {
	return (
		<Grid container>
			<Grid container direction="column" alignItems="center" pt={10} pb={15}
				css={css`color:white;`}>
				<Typography variant="h3">Career</Typography>
				<Grid container css={css`border-bottom:5px solid #fff;width:70px;`} pt={2} mb={4}></Grid>
				<Grid container direction="column" alignItems="left">
					<Jarasoft />
					<Aloys />
					<Beyless />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Career