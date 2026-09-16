/**
 * 경력·프로젝트 콘텐츠의 공통 형태.
 *
 * highlights 와 details 를 나눠 두는 게 핵심이다. 예전에는 업무 내용 열 몇 줄이
 * 같은 크기·같은 색으로 나열돼 있어서 위계가 없었고, 결국 아무도 안 읽었다.
 * highlights 는 펼친 채로, details 는 접어서 보여준다. 정보는 그대로 두고
 * 첫 화면의 부담만 덜어내려는 것이다.
 */
export type Work = {
  title: string;
  period: string;
  /** 담당 역할. 개인 프로젝트에는 없다. */
  role?: string;
  /** 연계 업체. 외주·납품 건에만 있다. */
  client?: string;
  /** 문자열 한 줄이 아니라 배열이다. 칩으로 하나씩 그리기 위해. */
  stack: string[];
  /** 펼친 채로 보여줄 핵심. 3줄을 넘기지 않는다. */
  highlights: string[];
  /** 접어서 보여줄 나머지. 버리지 않는다. */
  details?: string[];
  images: string[];
  links?: { label: string; url: string }[];
  features?: string[];
};

export type Company = {
  name: string;
  logo: string;
  period: string;
  team: string;
  works: Work[];
};
