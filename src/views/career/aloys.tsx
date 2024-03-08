import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import {useRecoilState} from 'recoil';
import {isMobileState} from '/src/states/atoms';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';

const Aloys = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

  return (
    <Grid container direction="row" alignItems="start" css={css`border-bottom:1px solid #c4c3c3;`}>
      <Grid item container xs={isMobile?12:3} p={2} direction="column" alignItems="center">
        <Grid container p={2} mb={1} justifyContent="center"
              css={css`border:1px solid #989898;border-radius:10px;`}>
          <img src="images/aloys_logo.png" css={css`width:150px;`} alt="Aloys" loading="lazy" />
        </Grid>
        <Typography variant="h4" css={css`color:black;`}>(주)알로이스</Typography>
        <Typography variant="h6" css={css`color:gray;`}>2023.12 ~ 현재</Typography>
        <Typography variant="h6" css={css`color:gray;`}>앱개발 팀</Typography>
      </Grid>

      <Grid item container xs={isMobile?12:9} p={2} pb={6} direction="column" alignItems="center"
            css={css`border-left:1px solid #c4c3c3;`}>
        <Grid container direction="column" alignItems="left">
          <Typography variant="h4">⭐️ Mega Live Studio</Typography>
          <Typography variant="h6" pl={2}>► 담당 역할 : 풀스택 개발 전체</Typography>
          <Typography variant="h6" pl={2}>► 업무 기간 : 2024.02 ~ 현재</Typography>
          <Typography variant="h6" pl={2}>► 기술 스택 : React 18, Next.js 14, Typescript, React-query, Recoil, Material UI, Emotion, Node.js, Express, Mysql, Redis, Websocket, Swagger, AWS Amplify, AWS ECR, AWS ECS, AWS Fargate, AWS Aurora</Typography>
          <Typography variant="h6" pl={2}>► 업무 내용</Typography>
          <Typography variant="h6" pl={4}>➢ 라이브 방송 스트리머를 위한 실시간 모션 그래픽 플랫폼 개발</Typography>
          <Typography variant="h6" pl={4}>➢ ejs로 개발된 프로젝트 React로 컨버팅, ejs와 결합된 Express 서버 분리</Typography>
          <Carousel autoPlay={false} css={css`width: 100%;height: ${isMobile ? '250px' : '430px'};`}>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/imledit1.png" alt="imledit1"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/imledit2.png" alt="imledit2"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/imledit3.png" alt="imledit3"/>
          </Carousel>
        </Grid>

        <Grid container mt={4} direction="column" alignItems="left">
          <Typography variant="h4">⭐️ 스마트 접현등 관제</Typography>
          <Typography variant="h6" pl={2}>► 담당 역할 : 풀스택 개발 전체(기여도 100%)</Typography>
          <Typography variant="h6" pl={2}>► 업무 기간 : 2023.12 ~ 2024.02</Typography>
          <Typography variant="h6" pl={2}>► 기술 스택 : React 18, Next.js 14, Typescript, React-query, Recoil, Material UI, Emotion, Pixi.js, Node.js, Express, Mysql, Redis, Websocket, Swagger</Typography>
          <Typography variant="h6" pl={2}>► 업무 내용</Typography>
          <Typography variant="h6" pl={4}>➢ 정부과제 스마트 접현등 관제 서비스 개발</Typography>
          <Typography variant="h6" pl={4}>➢ Express 서버 API 구현, 정의서 작성</Typography>
          <Typography variant="h6" pl={4}>➢ 선박 접안 상태 실시간 통신, Pixi.js로 선박 상태 표시</Typography>
          <Carousel autoPlay={false} css={css`width: 100%;height: ${isMobile ? '250px' : '430px'};`}>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/hoverlight1.png" alt="hoverlight1"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/hoverlight2.png" alt="hoverlight2"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/hoverlight3.png" alt="hoverlight3"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/hoverlight4.png" alt="hoverlight4"/>
          </Carousel>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default Aloys