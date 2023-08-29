import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useRecoilState } from 'recoil';
import {isMobileState, isTabletState} from '/src/states/atoms'

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

const Diary = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const [isTablet, setIsTablet] = useRecoilState(isTabletState);

  return (
    <Grid container p={isTablet?2:3} mb={4} css={item} direction="column" alignItems="center">
      <Typography variant="h4" css={css`color:black;`}>다이어리</Typography>
      <Typography variant="h6" css={css`color:gray;`}>2021.03 ~ 서비스중</Typography>
      <Grid mt={2} container direction="row" alignItems="start">
        <Grid item container xs={isTablet?12:6} pr={isTablet?0:1}>
          <Carousel autoPlay={false} css={css`width:100%;height:${isTablet?isMobile?'250px':'430px':'350px'};`}>
            <img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/diary1.png" alt="diary1" />
            <img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/diary2.png" alt="diary2" loading="lazy" />
            <img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/diary3.png" alt="diary3" loading="lazy" />
            <img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/diary4.png" alt="diary4" loading="lazy" />
            <img css={css`width:100%;height:${isTablet?isMobile?'250px':'400px':'350px'};`} src="images/diary5.png" alt="diary5" loading="lazy" />
          </Carousel>
        </Grid>
        <Grid item container xs={isTablet?12:6} pt={isTablet?1:0} pl={isTablet?0:1}
              direction="column" css={css`color:black;`}>
          <Grid container pb={1} direction="row" alignItems="center">
            <Grid item container xs={isMobile?12:3} alignItems="center">
              <TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
              <Typography variant="h6">URL</Typography>
            </Grid>
            <Grid item container xs={isMobile?12:9}
                  onClick={() => window.open('https://purplediary.kr', '_blank')}>
              <Typography variant="body1" css={css`color:blue;${url};`}>
                {'https://purplediary.kr'}
              </Typography>
            </Grid>
          </Grid>
          <Grid container pb={1} direction="row" alignItems="start">
            <Grid item container xs={isMobile?12:3} alignItems="center">
              <TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
              <Typography variant="h6">기술스택</Typography>
            </Grid>
            <Grid item container xs={isMobile?12:9}>
              <Typography variant="h6">Vue 2, Vuex, Vuetify, SCSS, PWA, Firebase</Typography>
            </Grid>
          </Grid>
          <Grid container pb={1} direction="row" alignItems="start">
            <Grid item container xs={isMobile?12:3} alignItems="center">
              <TaskAltIcon fontSize="large" sx={{ color: 'black' }} />
              <Typography variant="h6">주요기능</Typography>
            </Grid>
            <Grid item container xs={isMobile?12:9}>
              <Typography variant="h6">메모장, 차계부, 내문서, 휴지통, 다이어리 커스터마이징, 모바일 지원</Typography>
            </Grid>
          </Grid>
          <Grid container css={css`border-bottom:1px solid gray;`} mb={1}></Grid>
          <Typography variant="h6">PC, Tablet, Mobile 어느환경에서나 사용할 수 있는 다이어리 입니다.</Typography>
          <Typography variant="h6">글꼴, 글자크기 커스터마이징을 사용해 나만의 이쁜 다이어리를 만들 수 있습니다.</Typography>
          <Typography variant="h6">메모장은 암호화 기능을 제공하여 안전하게 데이터를 저장합니다.</Typography>
          <Typography variant="h6">차계부를 이용해 차량 정비내역/특이사항을 기록할 수 있습니다.</Typography>
          <Typography variant="h6">내문서에는 텍스트에디터 기능을 제공하며 자유롭게 글을 작성할 수 있습니다.</Typography>
          <Typography variant="h6">휴지통은 삭제한 메모장을 보관하며 복구와 영구삭제 기능을 제공합니다.</Typography>
          <Typography variant="h6">Guest계정- ID: guest@test.com / PW: 123123</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Diary