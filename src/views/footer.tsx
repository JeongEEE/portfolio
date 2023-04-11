import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = () => {
	return (
		<Grid container>
			<Grid container direction="column" alignItems="center" pt={7} pb={7}
				css={css`color:white;`}>
				<Typography variant="h6">© 2023. Kim Gyu Jeong. All rights reserved.</Typography>	
			</Grid>
		</Grid>
	)
}

export default Footer