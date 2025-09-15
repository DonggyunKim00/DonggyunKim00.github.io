type Description = {
  text: string;
  link?: string;
};

export interface EDUCATION_ITEMS {
  title: string;
  desc: Description[];
  period: string;
}

export const EDUCATION_ITEMS: EDUCATION_ITEMS[] = [
  {
    title: 'kakao x goorm 구름톤 딥다이브 프론트엔드 개발자 과정',
    period: '2024.08 ~ 2025.04',
    desc: [
      { text: '프론트엔드 동료 개발자들과 협업 경험을 쌓기 위해 참여' },
      {
        text: '우수 스터디 선정',
        link: 'https://www.notion.so/goormkdx/useBuildUp-79890a418b86418dad56c914fa702b3e',
      },
      {
        text: '파이널 프로젝트 대상 수상',
        link: 'https://deepdive.goorm.io/1e44e699-7fb0-806c-a33c-f874fc56ff6f',
      },
    ],
  },
  {
    title: '한세대학교',
    period: '2019.03 ~ 2025.02',
    desc: [
      { text: '컴퓨터공학과 졸업' },
      { text: '전공 학점: 4.17 / 4.5' },
      {
        text: '웹 개발 동아리 "감자" 회장(8개월), 부원(24개월) 활동',
        link: 'https://github.com/potato-club',
      },
      { text: '교내 최초 컴퓨터공학과 해커톤 기획 및 주도' },
    ],
  },
];
