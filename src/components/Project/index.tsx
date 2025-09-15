import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { PROJECT_ITEMS } from '../../constant/project';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <Container>
      <Typography variant="h3" fontSize={15} color="#121212" fontWeight={400}>
        PROJECT
      </Typography>

      {PROJECT_ITEMS.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </Container>
  );
};

export default Project;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 16px;
`;
