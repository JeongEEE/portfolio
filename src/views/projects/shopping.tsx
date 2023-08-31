import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useRecoilState } from 'recoil';
import {isMobileState, isTabletState} from '/src/states/atoms'
import useObserver from "/src/hooks/useObserver";
import {slideIn} from "/src/utils/animate";
import { motion } from 'framer-motion';

const item = css`
	border-radius: 10px;
	background-color:white;
	box-shadow: 4px 4px 5px 4px rgba(70,70,70,0.2);
	color: #837df6;
`
const url = css`
  cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`

const Shopping = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);
	const [isTablet, setIsTablet] = useRecoilState(isTabletState);
	const { ref, animation } = useObserver();

	return (
		<motion.div ref={ref} animate={animation}
								variants={slideIn("right", "tween", 0.2, 0.35)}>
			<Grid container p={isTablet?2:3} mb={4} css={item} direction="column" alignItems="center">
				<Typography variant="h4" css={css`color:black;`}>쇼핑몰</Typography>
				<Typography variant="h6" css={css`color:gray;`}>2023.02</Typography>
				<Grid mt={2} container direction="row" alignItems="start">
					<Grid item container xs={isTablet?12:6} pr={isTablet?0:1}>
						<Carousel autoPlay={false} css={css`width:100%;height:${isTablet?isMobile?'280px':'460px':'380px'};`}>
							<img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/shopping1.png" alt="shopping1" />
							<img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/shopping2.png" alt="shopping2" loading="lazy" />
							<img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/shopping3.png" alt="shopping3" loading="lazy" />
							<img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/shopping4.png" alt="shopping4" loading="lazy" />
							<img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/shopping5.png" alt="shopping5" loading="lazy" />
							<img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/shopping6.png" alt="shopping6" loading="lazy" />
						</Carousel>
					</Grid>
					<Grid item container xs={isTablet?12:6} pt={isTablet?1:0} pl={isTablet?0:1}
								direction="column" css={css`color:black;`}>
						<Grid container pb={1} direction="row" alignItems="center">
							<Grid item container xs={isMobile?12:3} alignItems="center">
								<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
								<Typography variant="h6">GitHub</Typography>
							</Grid>
							<Grid item container xs={isMobile?12:9}
								onClick={() => window.open('https://github.com/JeongEEE/shopping-react-nextjs', '_blank')}>
								<Typography variant="body1" css={css`color:blue;${url};`}>
									{'https://github.com/JeongEEE/shopping-react-nextjs'}
								</Typography>
							</Grid>
						</Grid>
						<Grid container pb={1} direction="row" alignItems="center">
							<Grid item container xs={isMobile?12:3} alignItems="center">
								<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
								<Typography variant="h6">URL</Typography>
							</Grid>
							<Grid item container xs={isMobile?12:9}
								onClick={() => window.open('https://shopping-react-ece42.firebaseapp.com', '_blank')}>
								<Typography variant="body1" css={css`color:blue;${url};`}>
									{'https://shopping-react-ece42.firebaseapp.com'}
								</Typography>
							</Grid>
						</Grid>
						<Grid container pb={1} direction="row" alignItems="start">
							<Grid item container xs={isMobile?12:3} alignItems="center">
								<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
								<Typography variant="h6">기술스택</Typography>
							</Grid>
							<Grid item container xs={isMobile?12:9}>
								<Typography variant="h6">React, Typescript, Next.js, Recoil, Material UI, Emotion, Firebase</Typography>
							</Grid>
						</Grid>
						<Grid container pb={1} direction="row" alignItems="start">
							<Grid item container xs={isMobile?12:3} alignItems="center">
								<TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
								<Typography variant="h6">주요기능</Typography>
							</Grid>
							<Grid item container xs={isMobile?12:9}>
								<Typography variant="h6">Firebase 로그인/회원가입<br />상품 목록(Pagination)<br />오늘의 Hot한 상품 목록<br />상품 검색(상품명 검색)(Pagination)<br />카테고리 검색(Pagination)<br />장바구니, 찜 리스트, 마이페이지<br />결제페이지(실제 결제x), 주문목록<br />관리자 페이지(Pagination)(상품관리 - 상품 추가, 수정, 삭제)<br />관리자 페이지(카테고리 관리 - 추가, 삭제)<br />상품 할인, 할인 쿠폰</Typography>
							</Grid>
						</Grid>
						<Grid container css={css`border-bottom:1px solid gray;`} mb={1}></Grid>
						<Typography variant="h6">Admin 계정 ID : test@test.com / PW : 123123</Typography>
						<Typography variant="h6">Next.js기반 React로 개발한 쇼핑몰 웹사이트 입니다.</Typography>
						<Typography variant="h6">Next.js와 React 학습을 위해 개발하였으며, 서버사이드 렌더링 기능을 학습 하였습니다. 상태관리는 Recoil을 적용하였으며, 레이아웃은 Material UI로 구성하고, js로 css스타일을 작성할 수 있도록 Emotion을 사용하였습니다.</Typography>
					</Grid>
				</Grid>
			</Grid>
		</motion.div>
	)
}

export default Shopping