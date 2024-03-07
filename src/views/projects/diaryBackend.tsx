import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useRecoilState } from 'recoil';
import {isMobileState, isTabletState} from '/src/states/atoms'
import useObserver from "/src/hooks/useObserver";

const item = css`
	border-radius: 10px;
	background-color:white;
	box-shadow: 4px 4px 5px 4px rgba(70,70,70,0.2);
	color: #837df6;
`

const DiaryBackend = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const [isTablet, setIsTablet] = useRecoilState(isTabletState);

  return (
    <Grid container p={isTablet?2:3} mb={4} css={item} direction="column" alignItems="center">
      <Typography variant="h4" css={css`color:black;`}>다이어리 서버</Typography>
      <Typography variant="h6" css={css`color:gray;`}>2024.01 ~ 유지보수 중</Typography>
      <Grid mt={2} container direction="row" alignItems="start">
        <Grid item container xs={isTablet?12:6} pr={isTablet?0:1}>
          <Carousel autoPlay={false} css={css`width:100%;height:${isTablet?isMobile?'280px':'460px':'380px'};`}>
            <img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/diary_backend1.png" alt="diary_backend1" />
            <img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/diary_backend2.png" alt="diary_backend2" loading="lazy" />
            <img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/diary_backend3.png" alt="diary_backend3" loading="lazy" />
          </Carousel>
        </Grid>
        <Grid item container xs={isTablet?12:6} pt={isTablet?1:0} pl={isTablet?0:1}
              direction="column" css={css`color:black;`}>
          <Grid container pb={1} direction="row" alignItems="start">
            <Grid item container xs={isMobile?12:3} alignItems="center">
              <TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
              <Typography variant="h6">기술스택</Typography>
            </Grid>
            <Grid item container xs={isMobile?12:9}>
              <Typography variant="h6">Nodejs 18, Express, Typescript, Joi, Minio, Mysql, Sequelize, Redis</Typography>
            </Grid>
          </Grid>

          <Grid container pb={1} direction="row" alignItems="start">
            <Grid item container xs={isMobile?12:3} alignItems="center">
              <TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
              <Typography variant="h6">주요기능</Typography>
            </Grid>
            <Grid item container xs={isMobile?12:9}>
              <Typography variant="h6">다이어리 서버, DB 관리, 외부 API 호출</Typography>
            </Grid>
          </Grid>

          <Grid container css={css`border-bottom:1px solid gray;`} mb={1}></Grid>
          <Typography variant="h6">Firebase로 구현한 다이어리 서비스에서 Firebase 로직을 제거하고 백엔드를 직접 구축하였습니다.</Typography>
          <Typography variant="h6">NodeJS Express로 서버를 구현하였으며 Typescript로 작성하여 유지보수가 수월하도록 코드를 작성하였습니다.</Typography>
          <Typography variant="h6">Nosql 기반의 firestore DB에서 관계형 데이터베이스인 Mysql로 마이그레이션 작업을 성공적으로 진행하였습니다.</Typography>
          <Typography variant="h6">정적인 Assets은 캐시정책을 설계하고, Redis를 활용하여 빠르게 캐시 데이터를 활용하도록 구축하였습니다.</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DiaryBackend