import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@mui/material';
import type { ProjectItem } from '../../constant/project';

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <Box display="flex" gap="18px" p={2}>
      <img {...project.icon} width={32} height={32} />
      <Box width="100%" pt="3px" position={'relative'}>
        <Link
          href={project.link}
          fontSize={12}
          fontWeight={400}
          paddingLeft={1}
          position={'absolute'}
          right={0}
          top={'9px'}
        >
          {project.name} 포트폴리오
        </Link>

        <Typography variant="h4" fontSize={18} fontWeight={600}>
          {project.name}
        </Typography>
        <Typography variant="caption" fontSize={13} color="#7e7e7e">
          {project.period}
        </Typography>

        <List sx={{ pl: 2, listStyleType: 'disc' }}>
          {project.tasks.map((task, idx) => (
            <ListItem key={idx} sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText
                primary={
                  <Typography fontSize={14} fontWeight={600}>
                    {task.title}
                  </Typography>
                }
                secondary={
                  <Typography fontSize={13} color="#555" whiteSpace="pre-line">
                    {task.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ProjectCard;
