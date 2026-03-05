import React from "react";
import { User, Calendar, Briefcase, Phone, Mail } from "lucide-react";
import { CAREER, EMAIL, PHONE, BIRTH } from "/src/constants";

const About = () => {
  return (
    <div className="py-24 md:py-32">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">ABOUT ME</h2>
      <div className="h-[2px] w-16 bg-white mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 이름 */}
        <div className="bg-[#111] border border-[#222] rounded-xl p-6 flex items-center gap-4 hover:border-[#333] hover:bg-[#1a1a1a] transition-all duration-200">
          <User className="w-8 h-8 text-white" />
          <div>
            <p className="text-sm md:text-base leading-7 text-zinc-400">이름</p>
            <p className="text-lg font-medium text-white">김규정</p>
          </div>
        </div>

        {/* 생년월일 */}
        <div className="bg-[#111] border border-[#222] rounded-xl p-6 flex items-center gap-4 hover:border-[#333] hover:bg-[#1a1a1a] transition-all duration-200">
          <Calendar className="w-8 h-8 text-white" />
          <div>
            <p className="text-sm md:text-base leading-7 text-zinc-400">생년월일</p>
            <p className="text-lg font-medium text-white">{BIRTH}년생</p>
          </div>
        </div>

        {/* 경력 */}
        <div className="bg-[#111] border border-[#222] rounded-xl p-6 flex items-center gap-4 hover:border-[#333] hover:bg-[#1a1a1a] transition-all duration-200">
          <Briefcase className="w-8 h-8 text-white" />
          <div>
            <p className="text-sm md:text-base leading-7 text-zinc-400">경력</p>
            <p className="text-lg font-medium text-white">{CAREER}년차</p>
          </div>
        </div>

        {/* 연락처 */}
        <div className="bg-[#111] border border-[#222] rounded-xl p-6 flex items-center gap-4 hover:border-[#333] hover:bg-[#1a1a1a] transition-all duration-200">
          <Phone className="w-8 h-8 text-white" />
          <div>
            <p className="text-sm md:text-base leading-7 text-zinc-400">연락처</p>
            <p className="text-lg font-medium text-white">{PHONE}</p>
          </div>
        </div>

        {/* EMAIL */}
        <div className="bg-[#111] border border-[#222] rounded-xl p-6 flex items-center gap-4 hover:border-[#333] hover:bg-[#1a1a1a] transition-all duration-200 md:col-span-2">
          <Mail className="w-8 h-8 text-white" />
          <div>
            <p className="text-sm md:text-base leading-7 text-zinc-400">EMAIL</p>
            <p className="text-lg font-medium text-white">{EMAIL}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;