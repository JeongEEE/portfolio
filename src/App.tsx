import React, { lazy, Suspense } from "react";
import Info from "/src/views/info";
import About from "/src/views/about";
import Skills from "/src/views/skills";
import Link from "/src/views/link";
import Projects from "/src/views/projects/index";
import Career from "/src/views/career/index";
import Footer from "/src/views/footer";
import TopButton from "/src/components/topButton";

const Background = lazy(() => import("/src/components/background"));
const StarField = lazy(() => import("/src/components/StarField"));
const ComputerCanvas = lazy(() => import("/src/components/computer"));

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. #info Section */}
      <section id="info" className="relative min-h-screen w-full bg-black flex flex-col">
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-8 h-[600px] flex-shrink-0">
          <Info />
        </div>
        {/* ComputerCanvas: 섹션 전체 배경으로 absolute 배치 */}
        <div id="computerBox" className="absolute inset-0 z-[1]">
          <Suspense fallback={
            <div className="absolute bottom-[10vh] left-[49vw] z-[5]">
              <div className="w-8 h-8 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <ComputerCanvas />
          </Suspense>
        </div>
      </section>

      {/* 2. #about Section */}
      <section id="about" className="relative w-full bg-[#0a0a0a]">
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-8">
          <About />
        </div>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </section>

      {/* 3. #skills Section */}
      <section id="skills" className="relative w-full bg-black">
        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 md:px-8">
          <Skills />
        </div>
      </section>

      {/* 4. #link Section */}
      <section id="link" className="relative w-full">
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-8">
          <Link />
        </div>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </section>

      {/* 5. #projects Section */}
      <section id="projects" className="relative w-full bg-[#0a0a0a]">
        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 md:px-8">
          <Projects />
        </div>
      </section>

      {/* 6. #career Section */}
      <section id="career" className="relative w-full bg-black">
        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 md:px-8">
          <Career />
        </div>
      </section>

      {/* 7. Footer Section */}
      <footer className="relative w-full bg-black">
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-8">
          <Footer />
        </div>
      </footer>

      <TopButton />
    </div>
  );
}

export default App;
