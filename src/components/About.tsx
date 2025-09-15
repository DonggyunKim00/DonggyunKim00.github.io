import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h3" fontSize={15} color="#121212" fontWeight={400}>
        ABOUT
      </Typography>

      <Box>
        <Typography mb={2} fontSize={14} color="#555555">
          저는 <strong>React, Next.js, TypeScript</strong> 기반의 프론트엔드
          개발자로, 개인 프로젝트를 통해 다양한 문제 상황을 직접 해결해왔습니다.
        </Typography>

        <Typography mb={2} fontSize={14} color="#555555">
          <mark>사용자 경험 개선</mark>에 초점을 두고, 상황에 맞게{' '}
          <strong>CSR, SSR, ISR</strong> 렌더링 방식을 적재적소에 활용하며
          개발했습니다. 또한 크롬 개발자 도구를 활용해{' '}
          <strong>HTTP 요청·응답 분석과 디버깅</strong>에도 익숙합니다.
        </Typography>

        <Typography fontSize={14} color="#555555">
          기술 블로그를 운영하며 프로젝트에서 발생한 이슈와 JavaScript의 내부
          동작 원리를 정리하고 회고하고 있습니다. 이를 통해 현재 실력에 안주하지
          않고, <mark>꾸준히 성장하려는 태도</mark>를 유지하고 있습니다.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 16px;

  strong {
    font-weight: 600;
  }
`;
