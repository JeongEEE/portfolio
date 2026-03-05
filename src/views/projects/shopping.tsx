import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CheckCircle2 } from "lucide-react";
import ImageViewDialog from "../../components/ImageViewDialog";

const shoppingImages = [
  "images/shopping1.png", "images/shopping2.png", "images/shopping3.png",
  "images/shopping4.png", "images/shopping5.png", "images/shopping6.png",
];

const Shopping = () => {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = (index: number) => {
    setDialogIndex(index);
    setDialogOpen(true);
  };

  return (
    <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden mb-6">
      {/* 헤더 */}
      <div className="p-6 border-b border-[#222]">
        <h3 className="text-xl font-semibold text-white">쇼핑몰</h3>
        <p className="text-zinc-500 text-sm mt-1">2023.02</p>
      </div>
      {/* 본문: 좌측 이미지 슬라이더 + 우측 텍스트 */}
      <div className="flex flex-col md:flex-row">
        {/* 이미지 슬라이더 */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full"
            style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
          >
            {shoppingImages.map((src, i) => (
              <SwiperSlide key={src}>
                <img
                  src={src}
                  className="w-full object-contain cursor-zoom-in"
                  alt={`shopping${i + 1}`}
                  loading={i === 0 ? undefined : "lazy"}
                  onClick={() => openDialog(i)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* 텍스트 정보 */}
        <div className="w-full md:w-1/2 p-6 flex flex-col gap-3">
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">GitHub</span>
              <p className="text-zinc-400 text-sm">
                <a
                  href="https://github.com/JeongEEE/shopping-react-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white hover:underline cursor-pointer"
                >
                  https://github.com/JeongEEE/shopping-react-nextjs
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">URL</span>
              <p className="text-zinc-400 text-sm">
                <a
                  href="https://shopping-react-ece42.firebaseapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white hover:underline cursor-pointer"
                >
                  https://shopping-react-ece42.firebaseapp.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">기술스택</span>
              <p className="text-zinc-400 text-sm">React, Typescript, Next.js, Recoil, Material UI, Emotion, Firebase</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">주요기능</span>
              <p className="text-zinc-400 text-sm">
                Firebase 로그인/회원가입<br />
                상품 목록(Pagination)<br />
                오늘의 Hot한 상품 목록<br />
                상품 검색(상품명 검색)(Pagination)<br />
                카테고리 검색(Pagination)<br />
                장바구니, 찜 리스트, 마이페이지<br />
                결제페이지(실제 결제x), 주문목록<br />
                관리자 페이지(Pagination)(상품관리 - 상품 추가, 수정, 삭제)<br />
                관리자 페이지(카테고리 관리 - 추가, 삭제)<br />
                상품 할인, 할인 쿠폰
              </p>
            </div>
          </div>
          <div className="border-b border-[#333] my-1"></div>
          <p className="text-zinc-400 text-sm">Admin 계정 ID : test@test.com / PW : 123123</p>
          <p className="text-zinc-400 text-sm">Next.js기반 React로 개발한 쇼핑몰 웹사이트 입니다.</p>
          <p className="text-zinc-400 text-sm">Next.js와 React 학습을 위해 개발하였으며, 서버사이드 렌더링 기능을 학습 하였습니다. 상태관리는 Recoil을 적용하였으며, 레이아웃은 Material UI로 구성하고, js로 css스타일을 작성할 수 있도록 Emotion을 사용하였습니다.</p>
        </div>
      </div>

      <ImageViewDialog
        images={shoppingImages}
        initialIndex={dialogIndex}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default Shopping;
