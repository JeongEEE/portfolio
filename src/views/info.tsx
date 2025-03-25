import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import {isMobileState, isTabletState} from '/src/states/atoms'
import {CAREER} from '/src/constants';

const Info = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);
	const [isTablet, setIsTablet] = useRecoilState(isTabletState);

	return (
		<Grid container>
			<Grid container direction="column" alignItems="center"
						css={css`padding-top:${isMobile?'100px':'170px'};color:white;`}>
				<Typography variant={isMobile ? 'h5' : 'h3'}>웹 프론트엔드 개발자</Typography>
				<Typography variant={isMobile ? 'h5' : 'h3'}>김규정 포트폴리오</Typography>
				<Grid container css={css`border-bottom:5px solid #fff;width:70px;`} pt={3} mb={4}></Grid>

				<Grid container direction="column" alignItems={isMobile?'start':'center'}
							css={css`color:#fff;`} p={isTablet?3:0}>
					<Typography variant={isTablet ? 'body1' : 'h6'}>안녕하세요! 저는 {CAREER}년차 웹 프론트엔드 개발자로, Vue와 React를 중점적으로 다루고 있습니다.</Typography>
					<Typography variant={isTablet ? 'body1' : 'h6'}>저는 프론트엔드 개발에 열정을 가지고 있으며,  새로운 기술과 트렌드를 항상 주시하고 적용하는 것에 관심이 많습니다.</Typography>
					<Typography variant={isTablet ? 'body1' : 'h6'}>또한 팀 프로젝트에서 원활한 커뮤니케이션과 협업을 통해 공동 목표를 달성하는 것을 중요시합니다.</Typography>
					<Typography variant={isTablet ? 'body1' : 'h6'}>문제 해결 능력과 창의성을 발휘하여 유연하고 효율적인 코드를 작성하며</Typography>
					<Typography variant={isTablet ? 'body1' : 'h6'}>사용자와 개발자 모두에게 만족스러운 결과물을 제공하고자 합니다.</Typography>
					<Typography variant={isTablet ? 'body1' : 'h6'}>함께 일하면서 지속적인 성장과 개발 역량을 향상시키는데 기여하고 싶습니다. 감사합니다.</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Info