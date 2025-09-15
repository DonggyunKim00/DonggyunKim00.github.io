import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@mui/material';
import type { EDUCATION_ITEMS } from '../../constant/education';

const EducationCard = ({ education }: { education: EDUCATION_ITEMS }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      gap={4}
      mb={4}
    >
      <Box maxWidth={'280px'} minWidth={'150px'}>
        <Typography variant="h6" fontWeight={600}>
          {education.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {education.period}
        </Typography>
      </Box>

      <Box width={'350px'}>
        <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
          {education.desc.map((item, idx) => (
            <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
              {item.link ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ typography: 'body2' }}
                >
                  {item.text}
                </Link>
              ) : (
                <ListItemText primary={item.text} />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default EducationCard;
