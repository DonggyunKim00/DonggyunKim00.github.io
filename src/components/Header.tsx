import styled from '@emotion/styled';
import { Box, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <Container>
      <Typography variant="h6" fontSize={18} fontWeight={'bold'}>
        경험을 설계하는 개발자 김동균
      </Typography>

      <Box display="flex" flexDirection="column" gap="8px">
        {/* 각 아이콘 + 텍스트 묶기 */}
        <Item>
          <GitHubIcon fontSize="small" />
          <Link
            href="https://github.com/DonggyunKim00"
            underline="hover"
            target="_blank"
            color="#616161"
            fontSize={'14px'}
          >
            https://github.com/DonggyunKim00
          </Link>
        </Item>

        <Item>
          <LinkIcon fontSize="small" />
          <Link
            href="https://daniel-devlog.tistory.com/"
            underline="hover"
            target="_blank"
            color="#616161"
            fontSize={'14px'}
          >
            https://daniel-devlog.tistory.com/
          </Link>
        </Item>

        <Item>
          <EmailIcon fontSize="small" />
          <Link
            href="mailto:donggyunkim12@gmail.com"
            underline="hover"
            color="#616161"
            fontSize={'14px'}
          >
            donggyunkim12@gmail.com
          </Link>
        </Item>
      </Box>
    </Container>
  );
};

export default Header;

// 스타일
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
`;

const Item = styled(Box)`
  display: flex;
  align-items: center;
  gap: 3px;
`;
