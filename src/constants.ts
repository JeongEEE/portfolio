/*
 * 첫 입사: 2019년 9월.
 *
 * 한국식 연차다. 입사한 해가 1년차이고, 입사한 달이 돌아올 때마다 하나씩 는다.
 * 2019.09 입사면 2026.09 에 만 7년을 채우면서 8년차가 된다.
 *
 * 예전 식은 경과 밀리초를 365.25일로 나눴는데, 해마다 하루씩 일찍 넘어갔다
 * (8년차 전환이 2026-09-01 이 아니라 2026-08-31). 달력 월수로 세면 그 오차가 없다.
 */
const START_YEAR = 2019;
const START_MONTH = 9;

export function careerYears(now: Date = new Date()): number {
  const months = (now.getFullYear() - START_YEAR) * 12 + (now.getMonth() + 1 - START_MONTH);
  return Math.floor(months / 12) + 1;
}

/*
 * SSG 라 이 값은 빌드 시점에 HTML 로 굳는다. 9월이 지나도 다시 빌드하기 전까지
 * 정적 HTML 은 옛 숫자를 들고 있다 (브라우저에서는 hydration 때 바로잡힌다).
 * 배포를 1년 넘게 쉴 일은 없으므로 그대로 둔다.
 */
export const CAREER = careerYears();

export const EMAIL = "tbtbtb156@naver.com";
export const PHONE = "010-2869-2734";
export const BIRTH = "1991";

/* 경계에서 하루씩 밀리는 게 이 계산의 유일한 실패 방식이라 경계만 확인한다.
   프로덕션 번들에서는 통째로 빠진다. */
if (import.meta.env.DEV) {
  const cases: [string, number][] = [
    ["2019-09-01", 1],
    ["2020-08-31", 1],
    ["2020-09-01", 2],
    ["2026-08-31", 7],
    ["2026-09-01", 8],
    ["2027-09-01", 9],
  ];
  for (const [iso, expected] of cases) {
    const got = careerYears(new Date(`${iso}T00:00:00`));
    if (got !== expected) {
      console.error(`연차 계산 오류: ${iso} -> ${got}년차 (기대 ${expected}년차)`);
    }
  }
}
