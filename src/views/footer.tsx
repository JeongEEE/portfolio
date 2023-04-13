import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'

const Footer = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);

	return (
		<Grid container>
			<Grid container direction="column" alignItems="center" p={isMobile?3:0} pt={7} pb={7}
				css={css`color:white;`}>
				<Typography variant="h6">© 2023. Kim Gyu Jeong. All rights reserved.</Typography>	
			</Grid>
		</Grid>
	)
}

export default Footer