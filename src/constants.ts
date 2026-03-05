const startDate = new Date(2019, 8, 1);
const now = new Date();
const diffMs = now.getTime() - startDate.getTime();
export const CAREER = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25)) + 1;
export const EMAIL = 'tbtbtb156@naver.com';
export const PHONE = '010-2869-2734';
export const BIRTH = '1991';