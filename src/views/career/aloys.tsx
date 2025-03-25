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
              css={css`border:1px solid #989898;border-radius:10px;background-color:#ffffff;`}>
          <img src="images/aloys_logo.png" css={css`width:150px;`} alt="Aloys" loading="lazy" />
        </Grid>
        <Typography variant="h4">(주)알로이스</Typography>
        <Typography variant="h6">2023.12 ~ 2024.12</Typography>
        <Typography variant="h6">앱개발 팀</Typography>
      </Grid>

      <Grid item container xs={isMobile?12:9} p={2} pb={6} direction="column" alignItems="center"
            css={css`border-left:1px solid #c4c3c3;`}>
        <Grid container direction="column" alignItems="left">
          <Typography variant="h4">⭐️ Mega Live Studio</Typography>
          <Typography variant="h6" pl={2}>► 담당 역할 : 풀스택 개발 전체</Typography>
          <Typography variant="h6" pl={2}>► 업무 기간 : 2024.02 ~ 2024.12</Typography>
          <Typography variant="h6" pl={2}>► 기술 스택 : React 18, Next.js 14, Typescript, React-query, Recoil, Material UI, Emotion, Lottie, fabric, i18n, Node.js, Express, Mysql, Redis, Websocket, AWS Amplify, AWS EC2</Typography>
          <Typography variant="h6" pl={2}>► 업무 내용</Typography>
          <Typography variant="h6" pl={4}>➢ 라이브 방송 스트리머를 위한 실시간 모션 그래픽 플랫폼 개발</Typography>
          <Typography variant="h6" pl={4}>➢ 미리 생성된 Lottie 모션, Image 디자인 템플릿을 사용자가 추가, 편집 및 실시간 방송에 오버레이로 송출할 수 있도록 개발</Typography>
          <Typography variant="h6" pl={4}>➢ Lottie 모션 오버레이를 편집하고 실시간 제어하며 방송기기에 송출하는 기능 개발</Typography>
          <Typography variant="h6" pl={4}>➢ 방송 큐시트를 직접 또는 AI로 작성하고 큐시트에 오버레이를 추가하여 큐시트 내용에 맞게 편집, 제어, 송출하는 기능 개발</Typography>
          <Typography variant="h6" pl={4}>➢ 메가라이브 방송기기와 웹소켓으로 실시간 통신</Typography>
          <Carousel autoPlay={false} css={css`width: 100%;height: ${isMobile ? '250px' : '430px'};`}>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive1.png" alt="megalive1"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive2.png" alt="megalive2"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive3.png" alt="megalive3"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive4.png" alt="megalive4"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive5.png" alt="megalive5"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive6.png" alt="megalive6"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive7.png" alt="megalive7"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive8.png" alt="megalive8"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive9.png" alt="megalive9"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive10.png" alt="megalive10"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive11.png" alt="megalive11"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive12.png" alt="megalive12"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/megalive13.png" alt="megalive13"/>
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