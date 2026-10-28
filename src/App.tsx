import React from "react";
import Info from "/src/views/info";
import About from "/src/views/about";
import Projects from "/src/views/projects/index";
import Career from "/src/views/career/index";
import Footer from "/src/views/footer";
import TopButton from "/src/components/topButton";

/*
 * 섹션 배경은 globals.css 의 body 가 --bg 로 깔아준다.
 * 루트가 overflow-x-hidden 이 아니라 clip 인 이유: hidden 은 스크롤 컨테이너를
 * 만들어 버려서 안쪽 position:sticky 가 페이지가 아니라 이 div 를 기준으로
 * 삼는다. 그러면 프로젝트 섹션 왼쪽 단이 따라오지 않고 그냥 굳는다.
 * clip 은 잘라내기만 하고 컨테이너를 만들지 않는다.
 *
 * 섹션마다 bg 를 다시 칠하지 않는 이유: 라이트/다크 어느 쪽이든 배경 명도차가
 * 1.1:1 수준이라 눈에 안 잡힌다. 섹션 구분은 여백과 경계선이 맡는다.
 */
function App() {
  return (
    <div className="relative w-full overflow-x-clip">
      {/* min-h-screen 대신 100dvh: 모바일 주소창이 접힐 때 레이아웃이 튀지 않는다 */}
      <section id="info" className="min-h-[100dvh] flex items-center">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-8">
          <Info />
        </div>
      </section>

      <section id="about">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-8">
          <About />
        </div>
      </section>

      <section id="career">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-8">
          <Career />
        </div>
      </section>

      <section id="projects">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-8">
          <Projects />
        </div>
      </section>

      <footer>
        <div className="max-w-5xl mx-auto w-full px-6 md:px-8">
          <Footer />
        </div>
      </footer>

      <TopButton />
    </div>
  );
}

export default App;
