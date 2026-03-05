import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageViewDialog from "../../components/ImageViewDialog";

const blurmeEnterpriseImages = [
  "images/blurme_enterprise1.png", "images/blurme_enterprise2.png", "images/blurme_enterprise3.png",
  "images/blurme_enterprise4.png", "images/blurme_enterprise5.png", "images/blurme_enterprise6.png",
  "images/blurme_enterprise7.png", "images/blurme_enterprise8.png", "images/blurme_enterprise9.png",
  "images/blurme_enterprise10.png", "images/blurme_enterprise11.png", "images/blurme_enterprise12.png",
  "images/blurme_enterprise13.png", "images/blurme_enterprise14.png", "images/blurme_enterprise15.png",
  "images/blurme_enterprise16.png",
];

const blurmeImages = [
  "images/blurme1.png", "images/blurme2.png", "images/blurme3.png", "images/blurme4.png",
  "images/blurme5.png", "images/blurme6.png", "images/blurme7.png", "images/blurme8.png",
  "images/blurme9.png", "images/blurme10.png", "images/blurme11.png", "images/blurme12.png",
  "images/blurme13.png", "images/blurme14.png", "images/blurme15.png", "images/blurme16.png",
  "images/blurme17.png"
];

const Jarasoft = () => {
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
            <img src="images/jarasoft_logo_black_ver.svg" className="w-28 h-auto object-contain" alt="자라소프트 로고" loading="lazy" />
          </div>
          <p className="text-white font-semibold text-center">(주)자라소프트</p>
          <p className="text-zinc-400 text-sm">2025.02 ~ 현재</p>
          <p className="text-zinc-500 text-sm">응용기술팀</p>
        </div>

        {/* 우측: 프로젝트 목록 */}
        <div className="w-full md:w-3/4 p-6 flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ Blur.me Enterprise</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 웹 프론트엔드 개발 (기여도 50%)</p>
              <p>► 업무 기간 : 2025.08 ~ 현재</p>
              <p>► 기술 스택 : Next.js 13, React 18, JavaScript, Recoil, MUI v5 (Joy UI, X-DataGrid), Mapbox GL, ApexCharts, react-hook-form, i18next, Axios, Framer Motion</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 기업 고객 대상 비식별화 솔루션 관리 대시보드(어드민) 서비스 개발 및 유지보수</p>
              <p className="pl-4">➢ 워크스페이스·사용자 권한 관리 및 조직 단위 멤버 초대/관리 기능 구현</p>
              <p className="pl-4">➢ API Key 발급·삭제 및 REST API 연동 관리 페이지 개발</p>
              <p className="pl-4">➢ ApexCharts를 활용한 처리 현황·사용량 통계 대시보드 구현</p>
              <p className="pl-4">➢ MUI X-DataGrid 기반 작업 상태 보드(Task Status Board) 및 대용량 목록 관리 UI 구현</p>
              <p className="pl-4">➢ 네트워크·시스템·보안 등 엔터프라이즈 설정 페이지 개발</p>
              <p className="pl-4">➢ react-hook-form + yup 기반 폼 유효성 검사 처리</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {blurmeEnterpriseImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`blurme_enterprise${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(blurmeEnterpriseImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ Blur.me</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 웹 프론트엔드 개발 (기여도 50%)</p>
              <p>► 업무 기간 : 2025.02 ~ 현재</p>
              <p>► 기술 스택 : Next.js 14, React 18, TypeScript, Recoil, Jotai, Tailwind CSS, MUI, i18next, React Konva, Video.js, WebAssembly, Stripe, Paddle, AWS Cognito, AWS S3, Framer Motion</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 동영상·이미지 내 얼굴·번호판 등을 AI로 자동 블러/모자이크 처리하는 글로벌 비식별화 SaaS 서비스 개발 및 유지보수</p>
              <p className="pl-4">➢ WebAssembly 기반 블러 처리 모듈 연동 및 React Konva를 활용한 Canvas 기반 영역 수동 지정 UI 구현</p>
              <p className="pl-4">➢ Video.js를 활용한 커스텀 영상 플레이어 및 프레임 단위 타임라인 조작 기능 개발</p>
              <p className="pl-4">➢ Stripe·Paddle 결제 연동 및 플랜별 구독/크레딧 관리 시스템 구현</p>
              <p className="pl-4">➢ react-i18next 기반 다국어(i18n) 지원 및 Next.js App Router [lng] 동적 라우팅 적용</p>
              <p className="pl-4">➢ next-auth + AWS Cognito 기반 소셜 로그인 및 인증 플로우 구현</p>
              <p className="pl-4">➢ Framer Motion을 활용한 랜딩페이지 인터랙션 및 모바일 반응형 UI 개발</p>
              <p className="pl-4">➢ Recoil 전역 상태 관리 및 Jotai SSR 대응 처리</p>
              <p className="pl-4">➢ LCP 개선 — 서버 컴포넌트에서 CMS 데이터의 첫 번째 섹션 이미지 URL을 추출 후 ReactDOM.preload() + fetchPriority: "high" 적용, Hero 컴포넌트에 priority prop 전달로 LCP 이미지 우선 로드</p>
              <p className="pl-4">➢ TBT/FCP 개선 — component-resolver에서 첫 번째 섹션(Above the Fold)은 Eager import로 즉시 렌더링하고, 나머지 섹션은 React.lazy + Suspense로 분리해 초기 JS 파싱 비용 절감</p>
              <p className="pl-4">➢ 코드 스플리팅 — next/dynamic을 활용해 Banner, Footer 등 비핵심 컴포넌트 지연 로드, 외부 스크립트는 ssr: false + 8초 defer 처리</p>
              <p className="pl-4">➢ 번들 최적화 — optimizePackageImports로 MUI·lodash 트리쉐이킹, @next/bundle-analyzer 도입으로 번들 사이즈 분석, SWC minify + 프로덕션 console 제거</p>
              <p className="pl-4">➢ 캐시 전략 — 공개 페이지 s-maxage=3600 / stale-while-revalidate=86400 CDN 캐시, 정적 자산 max-age=15552000(6개월) 장기 캐시, 인증·개인화 페이지 no-store 분리</p>
              <p className="pl-4">➢ 폰트 최적화 — next/font/local로 Mona Sans 로컬 폰트 최적화(font-display: swap), Pretendard는 non-blocking 비동기 로드, CDN에 preconnect + dns-prefetch 적용</p>
              <p className="pl-4">➢ 이미지 최적화 — Next.js 이미지 최적화 API 대신 CloudFront CDN 직접 연결로 Lambda@Edge 실행 비용 제거 및 응답속도 개선</p>
              <p className="pl-4">➢ PWA — next-pwa로 Service Worker 기반 오프라인 캐싱 적용, StreamSaver SW와 충돌 방지 설정</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {blurmeImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`blurme${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(blurmeImages, i)}
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

export default Jarasoft;
