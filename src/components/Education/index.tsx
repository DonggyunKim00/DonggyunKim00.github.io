import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { EDUCATION_ITEMS } from '../../constant/education';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <Container>
      <Typography variant="h3" fontSize={15} color="#121212" fontWeight={400}>
        EDUCATION
      </Typography>

      {EDUCATION_ITEMS.map((education) => (
        <EducationCard key={education.title} education={education} />
      ))}
    </Container>
  );
};

export default Education;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 16px;
`;
