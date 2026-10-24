import type { Company } from "./types";

/*
 * highlights 선정 기준: 수치가 있는 성과 > 대표 기능 > 담당 범위.
 * 채용 담당자가 30초 훑을 때 눈이 멈출 자리라서 세 줄을 넘기지 않는다.
 * 나머지는 details 로 접는다. 버리는 내용은 없다.
 */
export const companies: Company[] = [
  {
    name: "(주)자라소프트",
    logo: "images/jarasoft_logo_black_ver.svg",
    period: "2025.02 ~ 2026.11",
    team: "응용기술팀",
    works: [
      {
        title: "Blur.me Enterprise",
        period: "2025.08 ~ 2026.11",
        role: "웹 프론트엔드 (기여도 50%)",
        stack: ["Next.js 13", "React 18", "JavaScript", "Recoil", "MUI v5", "Joy UI", "X-DataGrid", "Mapbox GL", "ApexCharts", "react-hook-form", "i18next", "Framer Motion"],
        highlights: [
          "기업 고객용 비식별화 솔루션 관리 대시보드(어드민) 개발 및 유지보수",
          "MUI X-DataGrid 기반 작업 상태 보드와 대용량 목록 관리 UI 구현",
          "ApexCharts 로 처리 현황·사용량 통계 대시보드 구현",
        ],
        details: [
          "워크스페이스·사용자 권한 관리 및 조직 단위 멤버 초대/관리 기능 구현",
          "API Key 발급·삭제 및 REST API 연동 관리 페이지 개발",
          "네트워크·시스템·보안 등 엔터프라이즈 설정 페이지 개발",
        ],
        images: Array.from({ length: 16 }, (_, i) => `images/blurme_enterprise${i + 1}.webp`),
      },
      {
        title: "Blur.me",
        period: "2025.02 ~ 2026.11",
        role: "웹 프론트엔드 (기여도 50%)",
        stack: ["Next.js 14", "React 18", "TypeScript", "Recoil", "Jotai", "Tailwind CSS", "MUI", "i18next", "React Konva", "Video.js", "WebAssembly", "Stripe", "Paddle", "AWS Cognito", "AWS S3", "Framer Motion"],
        highlights: [
          "영상·이미지 속 얼굴·번호판을 AI 로 자동 블러 처리하는 글로벌 비식별화 SaaS 개발",
          "WebAssembly 블러 모듈 연동, React Konva 로 Canvas 기반 영역 수동 지정 UI 구현",
          "LCP·TBT·FCP 개선: 코드 스플리팅, MUI·lodash 트리쉐이킹, CDN 캐시 전략, 폰트·이미지 최적화",
        ],
        details: [
          "Video.js 로 커스텀 영상 플레이어와 프레임 단위 타임라인 조작 기능 개발",
          "Stripe·Paddle 결제 연동 및 플랜별 구독/크레딧 관리 시스템 구현",
          "next-auth + AWS Cognito 기반 소셜 로그인 및 인증 플로우 구현",
          "react-i18next 기반 다국어 지원",
          "Framer Motion 을 활용한 랜딩페이지 인터랙션 및 모바일 반응형 UI 개발",
          "Recoil 전역 상태 관리 및 Jotai SSR 대응 처리",
          "optimizePackageImports 로 MUI·lodash 트리쉐이킹, 번들 최적화",
          "공개 페이지 CDN 캐시와 정적 자산 장기 캐시 적용, 인증·개인화 페이지는 캐시 분리",
          "next/font/local 로 Mona Sans 로컬 최적화(font-display: swap), Pretendard 는 non-blocking 비동기 로드, CDN 에 preconnect + dns-prefetch",
          "이미지 CDN 직접 연결로 서버리스 함수 실행 비용 제거 및 응답속도 개선",
        ],
        images: Array.from({ length: 17 }, (_, i) => `images/blurme${i + 1}.webp`),
      },
    ],
  },
  {
    name: "(주)알로이스",
    logo: "images/aloys_logo.webp",
    period: "2023.12 ~ 2024.12",
    team: "앱개발팀",
    works: [
      {
        title: "Mega Live Studio",
        period: "2024.02 ~ 2024.12",
        role: "풀스택 개발 전체",
        stack: ["React 18", "Next.js 14", "TypeScript", "React Query", "Recoil", "MUI", "Emotion", "Lottie", "fabric", "i18n", "Node.js", "Express", "MySQL", "Redis", "WebSocket", "AWS Amplify", "AWS EC2"],
        highlights: [
          "라이브 방송 스트리머를 위한 실시간 모션 그래픽 플랫폼 개발",
          "Lottie 모션 오버레이를 편집하고 실시간 제어하며 방송기기로 송출하는 기능 개발",
          "방송 큐시트를 직접 또는 AI 로 작성하고, 큐시트 내용에 맞춰 오버레이를 편집·제어·송출",
        ],
        details: [
          "미리 만들어둔 Lottie 모션·이미지 템플릿을 사용자가 추가·편집해 실시간 방송에 오버레이로 송출",
          "메가라이브 방송기기와 WebSocket 으로 실시간 통신",
        ],
        images: Array.from({ length: 13 }, (_, i) => `images/megalive${i + 1}.webp`),
      },
      {
        title: "스마트 접현등 관제",
        period: "2023.12 ~ 2024.02",
        role: "풀스택 개발 전체 (기여도 100%)",
        stack: ["React 18", "Next.js 14", "TypeScript", "React Query", "Recoil", "MUI", "Emotion", "Pixi.js", "Node.js", "Express", "MySQL", "Redis", "WebSocket", "Swagger"],
        highlights: [
          "정부과제 스마트 접현등 관제 서비스 개발",
          "선박 접안 상태 실시간 통신, Pixi.js 로 선박 상태 시각화",
          "Express 서버 API 구현 및 정의서 작성",
        ],
        images: Array.from({ length: 4 }, (_, i) => `images/hoverlight${i + 1}.webp`),
      },
    ],
  },
  {
    name: "(주)베이리스",
    logo: "images/beyless_logo4.webp",
    period: "2019.09 ~ 2023.11",
    team: "플랫폼팀",
    works: [
      {
        title: "USEN Camera",
        period: "2021.12 ~ 2023.11",
        role: "웹 프론트엔드 전체 (기여도 80%)",
        client: "(주)USEN",
        stack: ["Vue 2", "Vuex", "Vuetify", "SCSS", "Video.js", "Canvas", "Chart.js", "AWS Kinesis Video Streams", "AWS Amplify"],
        highlights: [
          "AWS KVS 기반 CCTV 실시간 스트리밍 서비스 개발. 2023.03 상용 시작, 재직 당시 카메라 2,000대 이상 온라인",
          "Canvas 로 만든 비디오 타임라인에 북마크·클립·썸네일 캡처·다운로드 기능 구현",
          "웹팩 설정과 코드 스플리팅으로 성능 최적화 (Lighthouse: FCP 17.4s, TBT 280ms, Speed Index 15s 단축)",
        ],
        details: [
          "4개 사용자 권한별 웹서비스 구현, 권한에 맞게 기능 노출 제어",
          "다국어 지원 (일본어·영어·한국어)",
          "AWS KVS 스트리밍 비디오를 Live / Ondemand 로 재생하는 서비스 구현",
          "동영상 4·9·16 분할 화면 동시 재생",
          "Chart.js 로 매장 방문자 통계 시각화",
          "모바일 비디오 플레이어 웹페이지 구현",
          "AWS Amplify 로 배포 자동화",
          "동영상 메타데이터 획득 실패, 타임라인 생성·조작 불가 등 크로스 브라우징 이슈 해결",
        ],
        images: Array.from({ length: 7 }, (_, i) => `images/usen${i + 1}.webp`),
      },
      {
        title: "AI 무인 매대",
        period: "2019.10 ~ 2022.05",
        role: "웹 프론트엔드 전체 + 하이브리드 앱 (기여도 100%)",
        stack: ["Vue 2", "Vuex", "TypeScript", "SCSS", "Flutter", "Dart", "Jenkins"],
        highlights: [
          "자사 솔루션 AI 무인 매대 시스템 개발 및 유지보수",
          "WebSocket 통신으로 실시간 무인매대 관리 기능 구현",
          "QR코드로 접속하는 모바일 웹 구매 서비스 구현, 카카오페이·페이코 결제 연동",
        ],
        details: [
          "무인 매대 관리 웹과 관리용 모바일 앱 개발 및 유지보수",
        ],
        images: Array.from({ length: 5 }, (_, i) => `images/baive${i + 1}.webp`),
      },
      {
        title: "Beflyer 2.0",
        period: "2021.01 ~ 2021.04",
        role: "웹 프론트엔드 전체 (기여도 100%)",
        stack: ["Vue 2", "Vuex", "Vuetify", "TypeScript", "SCSS", "Canvas", "OpenLayers", "Turf.js", "Jenkins"],
        highlights: [
          "자사 드론관제시스템 Beflyer 리뉴얼 (CoffeeScript → Vue.js), 외주 개발분을 자체 유지보수 가능하게 전환",
          "OpenLayers 로 지도 컴포넌트 개발, Turf.js 로 위치정보 가공, WebSocket 으로 실시간 텔레메트리 송수신",
          "웨이포인트·그리드 기능으로 드론 비행 미션 생성",
        ],
        details: [
          "인증된 회원이 등록된 드론을 지도에서 실시간 관제하는 서비스 개발",
          "지도 위에 실시간 통신으로 드론 위치 표시",
          "날씨 및 비행금지구역 기능 구현",
        ],
        images: Array.from({ length: 6 }, (_, i) => `images/beflyer${i + 1}.webp`),
      },
      {
        title: "페이스박스 (FACE BOX)",
        period: "2021.06 ~ 2022.02",
        role: "태블릿 앱 개발 및 유지보수 (기여도 100%)",
        client: "외부 납품용",
        stack: ["Flutter", "Dart", "AWS Rekognition", "Google ML Kit"],
        highlights: [
          "AI 무인 매대와 연동되는 태블릿 앱 개발, 외부 납품",
          "AWS Rekognition 얼굴인식으로 회원가입·인증 구현, 조작 없이 진행되는 구매 프로세스 개발",
          "Google ML Kit 로 카드번호 OCR 구현",
        ],
        details: [
          "전면 카메라 상시 활성 상태에서 얼굴인식으로 동작",
          "페이 앱 결제, 카드 결제 기능 구현",
        ],
        images: Array.from({ length: 3 }, (_, i) => `images/facebox${i + 1}.webp`),
      },
      {
        title: "Drone Management",
        period: "2023.07 ~ 2023.11",
        role: "웹 개발 전체 (기여도 100%)",
        stack: ["React 18", "Next.js 13", "TypeScript", "Recoil", "MUI", "Emotion", "Firebase"],
        highlights: [
          "사내 드론팀 장비·비행일지 관리 웹 서비스 개발",
          "장비 수정내역 History 열람 기능 개발",
          "세분화된 비행일지·체크리스트 개발",
        ],
        images: Array.from({ length: 5 }, (_, i) => `images/beylessdrone${i + 1}.webp`),
      },
      {
        title: "캣휠 (Cat Wheel)",
        period: "2020.10 ~ 2020.11, 2021.05 ~ 2021.06",
        role: "IoT 기기 게이트웨이 개발 (기여도 100%)",
        stack: ["Node.js", "Firebase", "Raspberry Pi 4", "Bluetooth (noble)"],
        highlights: [
          "캣휠·체중계·펜던트 등 IoT 기기를 블루투스로 게이트웨이에 연결해 실시간 데이터 통신 구현",
          "게이트웨이 단말기 하나에 기기 3개 이상 동시 연결 가능하도록 구현",
          "센서 데이터 실시간 전송 및 앱 연동",
        ],
        details: [
          "Node.js 기반 블루투스 기능 개발 (noble 라이브러리)",
          "반려동물의 각종 데이터를 확인하는 시스템 개발",
        ],
        images: Array.from({ length: 3 }, (_, i) => `images/catwheel${i + 1}.webp`),
      },
      {
        title: "드론 배송",
        period: "2020.03 ~ 2020.06",
        role: "모바일 앱 개발 (기여도 70%)",
        stack: ["Flutter", "Dart"],
        highlights: [
          "국가과제 세종시 드론 배송 실증에 사용할 모바일 앱 개발",
          "구매자·판매자·배송기사 권한을 구분해 앱 하나로 이용 가능하도록 개발",
          "구글 플레이스토어 배포",
        ],
        images: Array.from({ length: 5 }, (_, i) => `images/drone${i + 1}.webp`),
      },
    ],
  },
];
