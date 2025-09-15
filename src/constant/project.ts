export interface ProjectItem {
  icon: {
    src: string;
    alt: string;
  };
  link: string;
  name: string;
  period: string;
  tasks: {
    title: string;
    description: string;
  }[];
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    icon: {
      src: '/project/henein-icon.png',
      alt: 'henein-icon',
    },
    name: '헤네인',
    link: 'https://donggyunkim.notion.site/Henein-22ae89e1be62806f8e5cf81db6c5eef9',
    period: '2025.02 ~ 2025.04',
    tasks: [
      {
        title: 'Nexon Open API 데이터 주기적 수집 및 저장 자동화',
        description:
          '→ Supabase Edge Function을 활용해 6분마다 데이터 수집 및 DB 삽입 스케줄링 구현',
      },
      {
        title: 'API 병목으로 인한 사용자 인터렉션 지연 문제 개선',
        description:
          '→ 5.8만개 이상의 원본 테이블에 대해 집계 테이블 구성 및 Next.js ISR 도입으로 사용자 인터렉션 지연 30초 → 1초 미만 단축',
      },
      {
        title: '안내 모달 이미지 로딩 지연 현상 개선',
        description: '→ next/image 최적화로 즉시 로딩 및 반응성 향상',
      },
      {
        title: 'Vercel 기반 트래픽 급증 대응 및 서버 인프라 관리',
        description:
          '→ 에러 대응 및 성능 추적 체계 강화\n(2025.06.26 기준 : 총 방문자 7,913명 / 페이지뷰 35,185회)',
      },
    ],
  },
  {
    icon: {
      src: '/project/gamza-icon.png',
      alt: 'gamza-icon',
    },
    name: 'Gamza Club',
    link: 'https://donggyunkim.notion.site/Gamza-Club-22ce89e1be628057b737c7b4ce987cf6',
    period: '2024.07 ~ 2025.03',
    tasks: [
      {
        title: '지연된 에러 피드백 및 상태 초기화 문제 개선',
        description:
          '→ Zod 기반 검증과 다중 스텝 폼 커스텀 훅을 도입해 코드 품질을 개선하고, 폼 제출 완료 시간을 최대 50% 단축',
      },
      {
        title: 'SSR 대응을 고려한 JWT 기반 토큰 관리 인증 흐름 설계',
        description:
          '→ 쿠키와 웹 스토리지를 조합해 SSR · CSR 환경 모두에서 사용성과 보안성을 갖춘 인증 구조 구현',
      },
      {
        title: '로딩 · 에러 바운더리에 따른 Skeleton UI 도입',
        description:
          '→ Toss/Suspensive 와 shadcn/ui 를 활용한 Headless 구조로 비즈니스 로직과 스타일을 분리, 상황에 맞는 Skeleton UI를 구성해 일관된 UX와 높은 DX를 동시에 확보',
      },
    ],
  },
];
