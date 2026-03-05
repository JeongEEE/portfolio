import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CheckCircle2 } from "lucide-react";
import ImageViewDialog from "../../components/ImageViewDialog";

const diaryImages = [
  "images/diary_screenshot1.png", "images/diary_screenshot2.png", "images/diary_screenshot3.png",
  "images/diary_screenshot4.png", "images/diary_screenshot5.png", "images/diary_screenshot6.png",
  "images/diary_screenshot7.png", "images/diary_screenshot8.png", "images/diary_screenshot9.png",
  "images/diary_screenshot10.png",
];

const Diary = () => {
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
        <h3 className="text-xl font-semibold text-white">다이어리</h3>
        <p className="text-zinc-500 text-sm mt-1">2021.03 ~ 서비스중</p>
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
            {diaryImages.map((src, i) => (
              <SwiperSlide key={src}>
                <img
                  src={src}
                  className="w-full object-contain cursor-zoom-in"
                  alt={`diary${i + 1}`}
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
              <span className="text-white text-sm font-medium">URL</span>
              <p className="text-zinc-400 text-sm">
                <a
                  href="https://purplediary.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white hover:underline cursor-pointer"
                >
                  https://purplediary.kr
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">기술스택</span>
              <p className="text-zinc-400 text-sm">Vue 2, Vuex, Vuetify, SCSS, PWA, Chart.js, WebPush</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">주요기능</span>
              <p className="text-zinc-400 text-sm">메모장, 차계부, 주차장, 내문서, 게시판, 휴지통, 달력, 지도, 글꼴 커스터마이징, 모바일 지원, PUSH 알림</p>
            </div>
          </div>
          <div className="border-b border-[#333] my-1"></div>
          <p className="text-zinc-400 text-sm">PC, Tablet, Mobile 어느환경에서나 사용할 수 있는 다이어리 입니다.</p>
          <p className="text-zinc-400 text-sm">글꼴, 글자크기 커스터마이징을 사용해 나만의 이쁜 다이어리를 만들 수 있습니다.</p>
          <p className="text-zinc-400 text-sm">메모장은 암호화 기능을 제공하여 안전하게 데이터를 저장합니다.</p>
          <p className="text-zinc-400 text-sm">차계부를 이용해 차량 정비내역/특이사항을 기록할 수 있습니다.</p>
          <p className="text-zinc-400 text-sm">주차장 기능을 사용해 내가 주차한 위치를 기록할 수 있습니다.</p>
          <p className="text-zinc-400 text-sm">내문서에는 텍스트에디터 기능을 제공하며 자유롭게 글을 작성할 수 있습니다.</p>
          <p className="text-zinc-400 text-sm"></p>
          <p className="text-zinc-400 text-sm">Guest계정- ID: guest@test.com / PW: 123123</p>
        </div>
      </div>

      <ImageViewDialog
        images={diaryImages}
        initialIndex={dialogIndex}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default Diary;
