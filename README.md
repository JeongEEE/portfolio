# 🍎 웹 포트폴리오
Node v.22.11.0, React 18, Vite, Typescript, Recoil, Material UI, Emotion, Firebase, 모바일 지원

----
https://portfolio.purplediary.kr

----
## Getting Started

First, run the development server:

```bash
pnpm i
pnpm dev

# 배포를 위해 firebase-tools 설치(처음 1회만)
npm i -g firebase-tools

firebase login

# 배포
pnpm run deploy
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

## 이미지·폰트 최적화

`pnpm dev`와 `pnpm build`는 WebP에서 480/960px 미리보기와 콘텐츠 해시가 붙은 URL을 자동 생성한다.
`public/images/responsive/`는 생성 전용 폴더다. 직접 파일을 넣지 않는다. 확대 보기는 원본을 유지한다.
이미지 크기표에는 SVG도 포함한다. 새 PNG는 기존 `pnpm optimize:images`로 먼저 변환한다.

현재 콘텐츠용 Pretendard 서브셋은 `src/assets/portfolio-pretendard.woff2`로 저장한다.
본문을 바꾼 뒤 `pnpm optimize:fonts`로 갱신할 수 있다(uv/uvx 필요).
일반 dev/build에는 Python이나 uv가 필요하지 않다. 갱신 전에도 새 글자는 기존 Pretendard 동적 서브셋으로 표시된다.
