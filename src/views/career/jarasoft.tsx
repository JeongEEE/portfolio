import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import {useRecoilState} from 'recoil';
import {isMobileState} from '/src/states/atoms';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';

const Jarasoft = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

  return (
    <Grid container direction="row" alignItems="start" css={css`border-bottom:1px solid #c4c3c3;`}>
      <Grid item container xs={isMobile?12:3} p={2} direction="column" alignItems="center">
        <Grid container p={2} mb={1} justifyContent="center"
              css={css`border:1px solid #989898;border-radius:10px;background-color:#ffffff;`}>
          <img src="images/jarasoft_logo_black_ver.svg" css={css`width:150px;`} alt="Aloys" loading="lazy" />
        </Grid>
        <Typography variant="h4">(주)자라소프트</Typography>
        <Typography variant="h6">2025.02 ~ 현재</Typography>
        <Typography variant="h6">개발팀</Typography>
      </Grid>

      <Grid item container xs={isMobile?12:9} p={2} pb={6} direction="column" alignItems="center"
            css={css`border-left:1px solid #c4c3c3;`}>
        <Grid container direction="column" alignItems="left">
          <Typography variant="h4">⭐️ Blur.me</Typography>
          <Typography variant="h6" pl={2}>► 담당 역할 : 웹 프론트엔드 개발</Typography>
          <Typography variant="h6" pl={2}>► 업무 기간 : 2025.02 ~ 현재</Typography>
          <Typography variant="h6" pl={2}>► 기술 스택 : React 18, Next.js 14, Typescript, Recoil, Material UI, Tailwind, i18n, Canvas, AWS Amplify, AWS EC2, AWS S3</Typography>
          <Typography variant="h6" pl={2}>► 업무 내용</Typography>
          <Typography variant="h6" pl={4}>➢ 동영상/이미지를 자동으로 블러/모자이크 처리해주는 AI 서비스 개발</Typography>
          <Typography variant="h6" pl={4}>➢ 블러미 관리자 서비스 개발</Typography>
          <Carousel autoPlay={false} css={css`width: 100%;height: ${isMobile ? '250px' : '430px'};`}>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/blurme1.png" alt="blurme1"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/blurme2.png" alt="blurme2"/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/blurme3.png" alt="blurme3"/>
          </Carousel>
        </Grid>

        {/* <Grid container mt={4} direction="column" alignItems="left">
          <Typography variant="h4">⭐️ </Typography>
          <Typography variant="h6" pl={2}>► 담당 역할 : </Typography>
          <Typography variant="h6" pl={2}>► 업무 기간 : </Typography>
          <Typography variant="h6" pl={2}>► 기술 스택 : </Typography>
          <Typography variant="h6" pl={2}>► 업무 내용</Typography>
          <Typography variant="h6" pl={4}>➢ </Typography>
          <Carousel autoPlay={false} css={css`width: 100%;height: ${isMobile ? '250px' : '430px'};`}>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/hoverlight1.png" alt=""/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/hoverlight2.png" alt=""/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/hoverlight3.png" alt=""/>
            <img css={css`width:100%;height:${isMobile ? '250px' : '400px'};`} src="images/hoverlight4.png" alt=""/>
          </Carousel>
        </Grid> */}

      </Grid>
    </Grid>
  )
}

export default Jarasoft