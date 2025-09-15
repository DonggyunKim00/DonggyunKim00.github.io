import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Intro = () => {
  return (
    <Container>
      <Image src="/donggyun.jpg" width={200} />
      <Typography variant="h1" fontSize={34} fontWeight={700} color="#121212">
        김동균
      </Typography>

      <Typography variant="h2" fontSize={20} fontWeight={400} color="#7e7e7e">
        Frontend Developer
      </Typography>
    </Container>
  );
};

export default Intro;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 32px 16px;
`;

const Image = styled.img`
  border-radius: 10px;
  margin-bottom: 20px;
`;
