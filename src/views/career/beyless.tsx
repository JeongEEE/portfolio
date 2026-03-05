import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageViewDialog from "../../components/ImageViewDialog";

const droneImages = [
  "images/beylessdrone1.png", "images/beylessdrone2.png", "images/beylessdrone3.png",
  "images/beylessdrone4.png", "images/beylessdrone5.png",
];
const usenImages = [
  "images/usen1.png", "images/usen2.png", "images/usen3.png",
  "images/usen4.png", "images/usen5.png", "images/usen6.png", "images/usen7.png",
];
const faceboxImages = [
  "images/facebox1.png", "images/facebox2.png", "images/facebox3.png",
];
const beflyerImages = [
  "images/beflyer1.png", "images/beflyer2.png", "images/beflyer3.png",
  "images/beflyer4.png", "images/beflyer5.png", "images/beflyer6.png",
];
const catwheelImages = [
  "images/catwheel1.png", "images/catwheel2.png", "images/catwheel3.png",
];
const droneDeliveryImages = [
  "images/drone1.png", "images/drone2.png", "images/drone3.png",
  "images/drone4.png", "images/drone5.png",
];
const baiveImages = [
  "images/baive1.png", "images/baive2.png", "images/baive3.png",
  "images/baive4.png", "images/baive5.png",
];

const Beyless = () => {
  const [dialogImages, setDialogImages] = useState<string[]>([]);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = (images: string[], index: number) => {
    setDialogImages(images);
    setDialogIndex(index);
    setDialogOpen(true);
  };

  return (
    <div className="border border-[#222] rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* 좌측: 로고 + 회사 정보 */}
        <div className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-[#222] flex flex-col items-center gap-2">
          <div className="border border-[#333] rounded-xl bg-white p-3 mb-2">
            <img src="images/beyless_logo4.png" className="w-28 h-auto object-contain" alt="베이리스 로고" loading="lazy" />
          </div>
          <p className="text-white font-semibold text-center">(주)베이리스</p>
          <p className="text-zinc-400 text-sm">2019.09 ~ 2023.11</p>
          <p className="text-zinc-500 text-sm">플랫폼 팀</p>
        </div>

        {/* 우측: 프로젝트 목록 */}
        <div className="w-full md:w-3/4 p-6 flex flex-col gap-8">
          {/* 프로젝트 1: Drone Management */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ Drone Management</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 웹 개발 전체(기여도 100%)</p>
              <p>► 업무 기간 : 2023.07 ~ 2023.11</p>
              <p>► 기술 스택 : React 18, Next.js 13, Typescript, Recoil, Material UI, Emotion, Firebase</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 사내 드론팀 장비, 드론비행일지 등 드론관리 웹 서비스 개발</p>
              <p className="pl-4">➢ 장비 수정내역 History 열람 기능 개발</p>
              <p className="pl-4">➢ 세분화된 비행일지, 체크리스트 개발</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {droneImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`drone${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(droneImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 프로젝트 2: USEN Camera */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ USEN Camera</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 연계 업체 : (주)USEN</p>
              <p>► 담당 역할 : 웹 프론트엔드 개발 전체(기여도 80%)</p>
              <p>► 업무 기간 : 2021.12 ~ 2023.11</p>
              <p>► 기술 스택 : Vue 2, Vuex, Vuetify, SCSS, Video.js, Canvas, Chart.js, AWS kinesis Video Streams, AWS Amplify</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ AWS 기반 CCTV 실시간 영상 스트리밍 웹 서비스 개발</p>
              <p className="pl-4">➢ 4개의 사용자 권한 웹서비스 구현, 권한에 맞게 기능 히든처리</p>
              <p className="pl-4">➢ 다국어 지원(일본어, 영어, 한국어)</p>
              <p className="pl-4">➢ AWS KVS 스트리밍 비디오를 Live, Ondemand 플레이 할 수 있는 서비스 구현</p>
              <p className="pl-4">➢ Canvas로 개발한 비디오 타임라인에 북마크, 클립, 썸네일 캡쳐, 다운로드 등 다양한 동영상 이벤트 기능을 개발</p>
              <p className="pl-4">➢ Chart.js로 매장 방문자 통계 데이터 시각화</p>
              <p className="pl-4">➢ 모바일 비디오 플레이어 웹페이지 구현</p>
              <p className="pl-4">➢ 웹팩 설정, 코드 스플리팅을 이용한 프론트엔드 성능 최적화(크롬 lighthouse 성능측정 - First Contentful Paint 17.4s, ToTal Blocking Time 280s, Speed Index 15s 감소)</p>
              <p className="pl-4">➢ AWS Amplify를 이용해 배포 자동화</p>
              <p>► 주요 성과</p>
              <p className="pl-4">➢ 23.03 상용서비스 시작, 현재 카메라 약 2070대 온라인</p>
              <p className="pl-4">➢ 동영상 타임라인 에디터를 포함한 비디오 플레이어 컴포넌트를 개발하여 이벤트 생성 및 세밀한 동영상 재생/편집 기능을 제공</p>
              <p className="pl-4">➢ 동영상 4개, 9개, 16개 화면 동시재생</p>
              <p className="pl-4">➢ 동영상의 메타데이터 획득이 안 되는 문제, 타임라인 생성 및 조작이 안 되는 문제 등 크로스 브라우징 이슈를 해결</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {usenImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`usen${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(usenImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 프로젝트 3: 페이스박스(FACE BOX) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ 페이스박스(FACE BOX)</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 연계 업체 : (주)파워풀엑스</p>
              <p>► 담당 역할 : 태블릿 앱 개발 및 유지보수(기여도 100%)</p>
              <p>► 업무 기간 : 2021.06 ~ 2022.02(약 8개월)</p>
              <p>► 기술 스택 : Flutter, Dart, AWS Rekognition, Google ML Kit</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 자사 솔루션 AI 무인 매대 시스템에 태블릿을 붙여서 파워풀엑스에 납품</p>
              <p className="pl-4">➢ AI 무인 매대와 연동되는 태블릿 앱(FACE BOX) 개발</p>
              <p className="pl-4">➢ AWS Rekognition 기반 얼굴인식 데이터를 사용하여 회원가입 및 인증을 구현</p>
              <p className="pl-4">➢ 상시 전면 카메라 활성상태에 얼굴인식 기능으로 조작이 필요없는 구매 프로세스 개발</p>
              <p className="pl-4">➢ Google ML Kit를 이용해 카드번호 OCR 개발</p>
              <p className="pl-4">➢ 페이 앱 결제, 카드 결제 기능 구현</p>
              <p>► 주요 성과</p>
              <p className="pl-4">➢ 얼굴인식으로 AI 무인 매대를 이용하는 기능 개발</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {faceboxImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`facebox${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(faceboxImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 프로젝트 4: Beflyer 2.0 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ Beflyer 2.0</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 웹 프론트엔드 개발 전체(기여도 100%)</p>
              <p>► 업무 기간 : 2021.01 ~ 2021.04(약 4개월)</p>
              <p>► 기술 스택 : Vue 2, Vuex, Vuetify, Typescript, SCSS, Canvas, OpenLayers, Turf.js, Jenkins</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 자사 솔루션 드론관제시스템 Beflyer 리뉴얼(커피스크립트 → Vue.js)</p>
              <p className="pl-4">➢ 인증된 회원에게 등록된 드론을 실시간으로 지도로 관제할 수 있는 서비스 개발</p>
              <p className="pl-4">➢ OpenLayers로 지도 컴포넌트 개발. Turf.js로 위치정보 데이터 가공. 웹 소켓으로 실시간 텔레메트리 데이터 송수신. 날씨 및 비행금지구역 기능 구현</p>
              <p className="pl-4">➢ 지도상에 실시간 통신으로 드론 위치 표시(웹소켓 통신)</p>
              <p className="pl-4">➢ 웨이포인트, 그리드 기능을 사용해 드론 비행 미션 생성</p>
              <p>► 주요 성과</p>
              <p className="pl-4">➢ 외주 개발된 프로젝트를 자체적으로 유지보수 가능</p>
              <p className="pl-4">➢ 커피스크립트로 개발된 프로젝트를 Vue.js로 리팩토링하여 유지보수가 용이함</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {beflyerImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`beflyer${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(beflyerImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 프로젝트 5: 캣휠(Cat Wheel) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ 캣휠(Cat Wheel)</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : IOT기기와 통신할 게이트웨이 개발(기여도 100%)</p>
              <p>► 업무 기간 : 2020.10 ~ 2020.11(약 2개월), 2021.05 ~ 2021.06(약 2개월)</p>
              <p>► 기술 스택 : Node.js, Firebase, Raspberry-Pi 4, bluetooth(noble)</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 캣휠, 체중계, 팬던트 등 각종 IOT 기기들을  블루투스를 이용해 게이트웨이와 연결하여 실시간 데이터 통신 구현</p>
              <p className="pl-4">➢ node.js 기반 블루투스 기능 개발(noble 라이브러리 사용)</p>
              <p className="pl-4">➢ 반려동물의 각종 데이터를 확인할 수 있는 시스템 개발</p>
              <p>► 주요 성과</p>
              <p className="pl-4">➢ 게이트웨이 단말기에 동시에 여러 기기(3개 이상)들을 블루투스로 연결 가능하도록 구현</p>
              <p className="pl-4">➢ 센서 데이터 실시간 전송 및 앱과 연동</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {catwheelImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`catwheel${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(catwheelImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 프로젝트 6: 드론 배송 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ 드론 배송</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 모바일 앱 개발(드론 배송 앱)(기여도 70%)</p>
              <p>► 업무 기간 : 2020.03 ~ 2020.06(약 3개월)</p>
              <p>► 기술 스택 : Flutter, Dart</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 국가과제 세종시 드론 배송 실증에 사용할 모바일 앱 개발</p>
              <p>► 주요 성과</p>
              <p className="pl-4">➢ 구매자/판매자/배송 기사 권한이 구분되어 하나의 앱으로 이용 가능하도록 개발</p>
              <p className="pl-4">➢ 구글 앱스토어 배포</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden max-w-xs mx-auto"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {droneDeliveryImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`drone${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(droneDeliveryImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 프로젝트 7: AI 무인 매대 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ AI 무인 매대</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 웹 프론트엔드 개발 전체(기여도 100%), 하이브리드 앱 개발 및 유지보수(기여도 100%)</p>
              <p>► 업무 기간 : 2019.10 ~ 2022.05</p>
              <p>► 기술 스택 : Vue 2, Vuex, Typescript, SCSS, Flutter, Dart, Jenkins</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 자사 솔루션 AI 무인 매대 시스템 개발 및 유지보수 업무</p>
              <p className="pl-4">➢ 웹 소켓 통신으로 실시간 무인매대 관리 기능 구현</p>
              <p className="pl-4">➢ 무인 매대 관리 웹, 무인 매대 관리 모바일 앱 개발 및 유지보수</p>
              <p className="pl-4">➢ QR코드로 접속 가능한 모바일 웹 구매 서비스 웹앱 구현</p>
              <p>► 주요 성과</p>
              <p className="pl-4">➢ 모바일 결제 연동(카카오페이, 페이코)</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {baiveImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`baive${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(baiveImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <ImageViewDialog
        images={dialogImages}
        initialIndex={dialogIndex}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default Beyless;
