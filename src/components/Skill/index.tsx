import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Skill = () => {
  return (
    <Container>
      <Typography variant="h3" fontSize={15} color="#121212" fontWeight={400}>
        SKILL
      </Typography>
    </Container>
  );
};

export default Skill;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 16px;
  border-top: 1px solid #e8e8e8;
`;
