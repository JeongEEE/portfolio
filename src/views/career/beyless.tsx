import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'
import Carousel from 'react-material-ui-carousel'

const Beyless = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);

	return (
		<Grid container direction="row" alignItems="start">
			<Grid item container xs={isMobile?12:3} p={2} direction="column" alignItems="center">
				<Grid container p={2} mb={1} justifyContent="center"
					css={css`border:1px solid #989898;border-radius:10px;`}>
					<img src="images/beyless_logo4.png" css={css`width:150px;`} alt="beyless" loading="lazy" />
				</Grid>
				<Typography variant="h4" css={css`color:black;`}>(주)베이리스</Typography>
				<Typography variant="h6" css={css`color:gray;`}>2019.09 ~ 현재</Typography>
				<Typography variant="h6" css={css`color:gray;`}>플랫폼 팀</Typography>
			</Grid>
			
			<Grid item container xs={isMobile?12:9} p={2} direction="column" alignItems="center"
				css={css`border-left:1px solid #c4c3c3;`}>
				<Grid container direction="column" alignItems="left">
					<Typography variant="h4">⭐️ Drone Management</Typography>
					<Typography variant="h6" pl={2}>► 담당 역할 : 웹 개발 전체(기여도 100%)</Typography>
					<Typography variant="h6" pl={2}>► 업무 기간 : 2023.07 ~ 현재</Typography>
					<Typography variant="h6" pl={2}>► 기술 스택 : React 18, Next.js 13, Typescript, Recoil, Material UI, Emotion, Firebase</Typography>
					<Typography variant="h6" pl={2}>► 업무 내용</Typography>
					<Typography variant="h6" pl={4}>➢ 사내 드론팀 장비, 드론비행일지 등 드론관리 웹 서비스 개발</Typography>
					<Typography variant="h6" pl={4}>➢ 장비 수정내역 History 열람 기능 개발</Typography>
					<Typography variant="h6" pl={4}>➢ 세분화된 비행일지, 체크리스트 개발</Typography>
				</Grid>

				<Grid container mt={4} direction="column" alignItems="left">
					<Typography variant="h4">⭐️ 엣지기반 위험환경 데이터 분석 기술 개발 및 자율주행 협업 플랫폼 실증</Typography>
					<Typography variant="h6" pl={2}>► 담당 역할 : 웹 프론트엔드 개발 전체(기여도 100%)</Typography>
					<Typography variant="h6" pl={2}>► 업무 기간 : 2023.07 ~ 현재</Typography>
					<Typography variant="h6" pl={2}>► 기술 스택 : Vue 3, Vite, Typescript, Pinia, Vuetify, SCSS, OpenLayers, Turf.js</Typography>
					<Typography variant="h6" pl={2}>► 업무 내용</Typography>
					<Typography variant="h6" pl={4}>➢ 특장차량 작업현장 자율주행 관제 웹 서비스 개발</Typography>
					<Typography variant="h6" pl={4}>➢ OpenLayers로 지도 컴포넌트 개발. Turf.js로 위치정보 데이터 가공.</Typography>
				</Grid>

				<Grid container mt={4} direction="column" alignItems="left">
					<Typography variant="h4">⭐️ USEN Camera</Typography>
					<Typography variant="h6" pl={2}>► 연계 업체 : (주)USEN</Typography>
					<Typography variant="h6" pl={2}>► 담당 역할 : 웹 프론트엔드 개발 전체(기여도 80%)</Typography>
					<Typography variant="h6" pl={2}>► 업무 기간 : 2021.12 ~ 2023 현재</Typography>
					<Typography variant="h6" pl={2}>► 기술 스택 : Vue 2, Vuex, Vuetify, SCSS, Video.js</Typography>
					<Typography variant="h6" pl={isMobile?2:10}>Canvas, Chart.js, AWS kinesis Video Streams, AWS Amplify</Typography>
					<Typography variant="h6" pl={2}>► 업무 내용</Typography>
					<Typography variant="h6" pl={4}>➢ AWS 기반 CCTV 실시간 영상 스트리밍 웹 서비스 개발</Typography>
					<Typography variant="h6" pl={4}>➢ 4개의 사용자 권한 웹서비스 구현, 권한에 맞게 기능 히든처리</Typography>
					<Typography variant="h6" pl={4}>➢ AWS KVS 스트리밍 비디오를 Live, Ondemand 플레이 할 수 있는 서비스 구현</Typography>
					<Typography variant="h6" pl={4}>➢ Canvas로 개발한 비디오 타임라인에 북마크, 클립, 썸네일 캡쳐, 다운로드 등 다양한 동영상 이벤트 기능을 개발</Typography>
					<Typography variant="h6" pl={4}>➢ Chart.js로 매장 방문자 통계 데이터 시각화</Typography>
					<Typography variant="h6" pl={4}>➢ 모바일 비디오 플레이어 웹페이지 구현</Typography>
					<Typography variant="h6" pl={4}>➢ 웹팩 설정, 코드 스플리팅을 이용한 프론트엔드 성능 최적화(크롬 lighthouse 성능측정 - First Contentful Paint 17.4s, ToTal Blocking Time 280s, Speed Index 15s 감소)</Typography>
					<Typography variant="h6" pl={4}>➢ AWS Amplify를 이용해 배포 자동화</Typography>
					<Typography variant="h6" pl={2}>► 주요 성과</Typography>
					<Typography variant="h6" pl={4}>➢ 23.03 상용서비스 시작, 현재 카메라 약 1730대 온라인</Typography>
					<Typography variant="h6" pl={4}>➢ 동영상 타임라인 에디터를 포함한 비디오 플레이어 컴포넌트를 개발하여 이벤트 생성 및 세밀한 동영상 재생/편집 기능을 제공</Typography>
					<Typography variant="h6" pl={4}>➢ 동영상 4개, 9개, 16개 화면 동시재생</Typography>
					<Typography variant="h6" pl={4}>➢ 동영상의 메타데이터 획득이 안 되는 문제, 타임라인 생성 및 조작이 안 되는 문제 등 크로스 브라우징 이슈를 해결</Typography>
					<Carousel autoPlay={false} css={css`width:100%;`}>
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen1.png" alt="usen1" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen2.png" alt="usen2" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen3.png" alt="usen3" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen4.png" alt="usen4" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen5.png" alt="usen5" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen6.png" alt="usen6" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/usen7.png" alt="usen7" loading="lazy" />
					</Carousel>
				</Grid>

				<Grid container mt={4} direction="column" alignItems="left">
					<Typography variant="h4">⭐️ 페이스박스(FACE BOX)</Typography>
					<Typography variant="h6" pl={2}>► 연계 업체 : (주)파워풀엑스</Typography>
					<Typography variant="h6" pl={2}>► 담당 역할 : 태블릿 앱 개발 및 유지보수(기여도 100%)</Typography>
					<Typography variant="h6" pl={2}>► 업무 기간 : 2021.06 ~ 2022.02(약 8개월)</Typography>
					<Typography variant="h6" pl={2}>► 기술 스택 : Flutter, Dart, AWS Rekognition, Google ML Kit</Typography>
					<Typography variant="h6" pl={2}>► 업무 내용</Typography>
					<Typography variant="h6" pl={4}>➢ 자사 솔루션 AI 무인 매대 시스템에 태블릿을 붙여서 파워풀엑스에 납품</Typography>
					<Typography variant="h6" pl={4}>➢ AI 무인 매대와 연동되는 태블릿 앱(FACE BOX) 개발</Typography>
					<Typography variant="h6" pl={4}>➢ AWS Rekognition 기반 얼굴인식 데이터를 사용하여 회원가입 및 인증을 구현</Typography>
					<Typography variant="h6" pl={4}>➢ 상시 전면 카메라 활성상태에 얼굴인식 기능으로 조작이 필요없는 구매 프로세스 개발</Typography>
					<Typography variant="h6" pl={4}>➢ Google ML Kit를 이용해 카드번호 OCR 개발</Typography>
					<Typography variant="h6" pl={4}>➢ 페이 앱 결제, 카드 결제 기능 구현</Typography>
					<Typography variant="h6" pl={2}>► 주요 성과</Typography>
					<Typography variant="h6" pl={4}>➢ 얼굴인식으로 AI 무인 매대를 이용하는 기능 개발</Typography>
					<Carousel autoPlay={false} css={css`width:100%;`}>
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/facebox1.png" alt="facebox1" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/facebox2.png" alt="facebox2" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/facebox3.png" alt="facebox3" loading="lazy" />
					</Carousel>
				</Grid>
				
				<Grid container mt={4} direction="column" alignItems="left">
					<Typography variant="h4">⭐️ Beflyer 2.0</Typography>
					<Typography variant="h6" pl={2}>► 담당 역할 : 웹 프론트엔드 개발 전체(기여도 100%)</Typography>
					<Typography variant="h6" pl={2}>► 업무 기간 : 2021.01 ~ 2021.04(약 4개월)</Typography>
					<Typography variant="h6" pl={2}>► 기술 스택 : Vue 2, Vuex, Vuetify, Typescript, SCSS, Canvas, OpenLayers, Turf.js, Jenkins</Typography>
					<Typography variant="h6" pl={2}>► 업무 내용</Typography>
					<Typography variant="h6" pl={4}>➢ 자사 솔루션 드론관제시스템 Beflyer 리뉴얼(커피스크립트 → Vue.js)</Typography>
					<Typography variant="h6" pl={4}>➢ 인증된 회원에게 등록된 드론을 실시간으로 지도로 관제할 수 있는 서비스 개발</Typography>
					<Typography variant="h6" pl={4}>➢ OpenLayers로 지도 컴포넌트 개발. Turf.js로 위치정보 데이터 가공. 웹 소켓으로 실시간 텔레메트리 데이터 송수신. 날씨 및 비행금지구역 기능 구현</Typography>
					<Typography variant="h6" pl={4}>➢ 지도상에 실시간 통신으로 드론 위치 표시(웹소켓 통신)</Typography>
					<Typography variant="h6" pl={4}>➢ 웨이포인트, 그리드 기능을 사용해 드론 비행 미션 생성</Typography>
					<Typography variant="h6" pl={2}>► 주요 성과</Typography>
					<Typography variant="h6" pl={4}>➢ 외주 개발된 프로젝트를 자체적으로 유지보수 가능</Typography>
					<Typography variant="h6" pl={4}>➢ 커피스크립트로 개발된 프로젝트를 Vue.js로 리팩토링하여 유지보수가 용이함</Typography>
					<Carousel autoPlay={false} css={css`width:100%;`}>
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/beflyer1.png" alt="beflyer1" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/beflyer2.png" alt="beflyer2" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/beflyer3.png" alt="beflyer3" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/beflyer4.png" alt="beflyer4" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/beflyer5.png" alt="beflyer5" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/beflyer6.png" alt="beflyer6" loading="lazy" />
					</Carousel>
				</Grid>

				<Grid container mt={4} direction="column" alignItems="left">
					<Typography variant="h4">⭐️ 캣휠(Cat Wheel)</Typography>
					<Typography variant="h6" pl={2}>► 담당 역할 : IOT기기와 통신할 게이트웨이 개발(기여도 100%)</Typography>
					<Typography variant="h6" pl={2}>► 업무 기간 : 2020.10 ~ 2020.11(약 2개월), 2021.05 ~ 2021.06(약 2개월)</Typography>
					<Typography variant="h6" pl={2}>► 기술 스택 : Node.js, Firebase, Raspberry-Pi 4, bluetooth(noble)</Typography>
					<Typography variant="h6" pl={2}>► 업무 내용</Typography>
					<Typography variant="h6" pl={4}>➢ 캣휠, 체중계, 팬던트 등 각종 IOT 기기들을  블루투스를 이용해 게이트웨이와 연결하여 실시간 데이터 통신 구현</Typography>
					<Typography variant="h6" pl={4}>➢ node.js 기반 블루투스 기능 개발(noble 라이브러리 사용)</Typography>
					<Typography variant="h6" pl={4}>➢ 반려동물의 각종 데이터를 확인할 수 있는 시스템 개발</Typography>
					<Typography variant="h6" pl={2}>► 주요 성과</Typography>
					<Typography variant="h6" pl={4}>➢ 게이트웨이 단말기에 동시에 여러 기기(3개 이상)들을 블루투스로 연결 가능하도록 구현</Typography>
					<Typography variant="h6" pl={4}>➢ 센서 데이터 실시간 전송 및 앱과 연동</Typography>
					<Carousel autoPlay={false} css={css`width:100%;`}>
						<img css={css`width:100%;height:${isMobile?'400px':'600px'};`} src="images/catwheel1.png" alt="catwheel1" />
						<img css={css`width:100%;height:${isMobile?'400px':'600px'};`} src="images/catwheel2.png" alt="catwheel2" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'400px':'600px'};`} src="images/catwheel3.png" alt="catwheel3" loading="lazy" />
					</Carousel>
				</Grid>

				<Grid container mt={4} direction="column" alignItems="left">
					<Typography variant="h4">⭐️ 드론 배송</Typography>
					<Typography variant="h6" pl={2}>► 담당 역할 : 모바일 앱 개발(드론 배송 앱)(기여도 70%)</Typography>
					<Typography variant="h6" pl={2}>► 업무 기간 : 2020.03 ~ 2020.06(약 3개월)</Typography>
					<Typography variant="h6" pl={2}>► 기술 스택 : Flutter, Dart</Typography>
					<Typography variant="h6" pl={2}>► 업무 내용</Typography>
					<Typography variant="h6" pl={4}>➢ 국가과제 세종시 드론 배송 실증에 사용할 모바일 앱 개발</Typography>
					<Typography variant="h6" pl={2}>► 주요 성과</Typography>
					<Typography variant="h6" pl={4}>➢ 구매자/판매자/배송 기사 권한이 구분되어 하나의 앱으로 이용 가능하도록 개발</Typography>
					<Typography variant="h6" pl={4}>➢ 구글 앱스토어 배포</Typography>
					<Carousel autoPlay={false} css={css`width:${isMobile?'100%':'60%'};`}>
						<img css={css`width:100%;height:${isMobile?'500px':'600px'};`} src="images/drone1.png" alt="drone1" />
						<img css={css`width:100%;height:${isMobile?'500px':'600px'};`} src="images/drone2.png" alt="drone2" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'500px':'600px'};`} src="images/drone3.png" alt="drone3" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'500px':'600px'};`} src="images/drone4.png" alt="drone4" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'500px':'600px'};`} src="images/drone5.png" alt="drone5" loading="lazy" />
					</Carousel>
				</Grid>
				
				<Grid container mt={4} direction="column" alignItems="left">
					<Typography variant="h4">⭐️ AI 무인 매대</Typography>
					<Typography variant="h6" pl={2}>► 담당 역할 : 웹 프론트엔드 개발 전체(기여도 100%), 하이브리드 앱 개발 및 유지보수(기여도 100%)</Typography>
					<Typography variant="h6" pl={2}>► 업무 기간 : 2019.10 ~ 2022.05</Typography>
					<Typography variant="h6" pl={2}>► 기술 스택 : Vue 2, Vuex, Typescript, SCSS, Flutter, Dart, Jenkins</Typography>
					<Typography variant="h6" pl={2}>► 업무 내용</Typography>
					<Typography variant="h6" pl={4}>➢ 자사 솔루션 AI 무인 매대 시스템 개발 및 유지보수 업무</Typography>
					<Typography variant="h6" pl={4}>➢ 웹 소켓 통신으로 실시간 무인매대 관리 기능 구현</Typography>
					<Typography variant="h6" pl={4}>➢ 무인 매대 관리 웹, 무인 매대 관리 모바일 앱 개발 및 유지보수</Typography>
					<Typography variant="h6" pl={4}>➢ QR코드로 접속 가능한 모바일 웹 구매 서비스 웹앱 구현</Typography>
					<Typography variant="h6" pl={2}>► 주요 성과</Typography>
					<Typography variant="h6" pl={4}>➢ 모바일 결제 연동(카카오페이, 페이코)</Typography>
					<Carousel autoPlay={false} css={css`width:100%;`}>
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/baive1.png" alt="baive1" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/baive2.png" alt="baive2" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/baive3.png" alt="baive3" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/baive4.png" alt="baive4" loading="lazy" />
						<img css={css`width:100%;height:${isMobile?'250px':'400px'};`} src="images/baive5.png" alt="baive5" loading="lazy" />
					</Carousel>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Beyless