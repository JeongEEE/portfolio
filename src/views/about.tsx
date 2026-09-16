import React from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "/src/components/reveal";
import { imageSizes } from "/src/data/imageSizes";
import SectionHeader from "/src/components/sectionHeader";
import { CAREER, EMAIL, PHONE, BIRTH } from "/src/constants";

/* 자격증은 여기서만 쓰이므로 데이터 파일을 따로 두지 않는다. */
const CERTIFICATE = {
  image: "images/aws_cp.webp",
  name: "AWS Certified Cloud Practitioner",
};

const GITHUB = "https://github.com/JeongEEE";

/*
 * 예전에는 인적사항이 카드 5장이었다. 카드는 위계를 만들 때 쓰는 건데
 * 다섯 항목이 전부 같은 무게라 위계가 없었고, 배경 명도차도 1.1:1 수준이라
 * 실제로 카드를 보이게 하던 건 테두리였다. 선으로만 나눈다.
 */
const About = () => {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: "이름", value: "김규정" },
    { label: "생년월일", value: `${BIRTH}년생` },
    { label: "경력", value: `${CAREER}년차` },
    {
      label: "연락처",
      value: (
        <a href={`tel:${PHONE.replace(/-/g, "")}`} className="hover:text-accent transition-colors">
          {PHONE}
        </a>
      ),
    },
    {
      label: "이메일",
      value: (
        <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">
          {EMAIL}
        </a>
      ),
    },
  ];

  return (
    <div className="py-24 md:py-32">
      <SectionHeader index="01" title="ABOUT" />

      <Reveal>
        <dl className="max-w-2xl border-y border-line divide-y divide-line">
          {rows.map(({ label, value }) => (
            <div key={label} className="flex gap-6 py-4">
              <dt className="w-24 shrink-0 text-sm text-ink-muted">{label}</dt>
              <dd className="text-ink">{value}</dd>
            </div>
          ))}

          <div className="flex gap-6 py-4">
            <dt className="w-24 shrink-0 text-sm text-ink-muted">GitHub</dt>
            <dd>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:underline"
              >
                github.com/JeongEEE
                <ExternalLink size={14} />
              </a>
            </dd>
          </div>

          <div className="flex gap-6 py-4">
            <dt className="w-24 shrink-0 text-sm text-ink-muted">자격증</dt>
            <dd className="flex items-center gap-3">
              <img
                src={CERTIFICATE.image}
                width={imageSizes[CERTIFICATE.image]?.[0]}
                height={imageSizes[CERTIFICATE.image]?.[1]}
                className="h-auto w-12"
                alt=""
                loading="lazy"
              />
              <span className="text-ink">{CERTIFICATE.name}</span>
            </dd>
          </div>
        </dl>
      </Reveal>
    </div>
  );
};

export default About;
