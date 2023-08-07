import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'

const Info = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);

	return (
		<Grid container>
			<Grid container direction="column" alignItems="center"
				css={css`padding-top:${isMobile?'100px':'170px'};color:white;`}>
				<Typography variant={isMobile ? 'h5' : 'h3'}>웹 프론트엔드 개발자</Typography>
				<Typography variant={isMobile ? 'h5' : 'h3'}>김규정 포트폴리오</Typography>
				<Grid container css={css`border-bottom:5px solid blue;width:70px;`} pt={3} mb={4}></Grid>

				<Grid container direction="column" alignItems={isMobile?'start':'center'}
					css={css`color:#cdcdcd;`} p={isMobile?3:0}>
					<Typography variant={isMobile ? 'body1' : 'h5'}>안녕하세요. 4년차 웹 프론트엔드 개발자로 근무하고 있습니다.</Typography>
					<Typography variant={isMobile ? 'body1' : 'h5'}>저는 SPA에 대한 이해가 깊으며, 클라우드에 흥미가 많습니다.</Typography>
					<Typography variant={isMobile ? 'body1' : 'h5'}>사용자의 입장에서 어떻게 하면 서비스를 편리하고</Typography>
					<Typography variant={isMobile ? 'body1' : 'h5'}>효율적으로 접근이 가능한지 고민하는 것을 좋아합니다.</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Info