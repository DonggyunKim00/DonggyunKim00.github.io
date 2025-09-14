import Header from './components/Header';
import Intro from './components/Intro';
import { Box, Container } from '@mui/material';
import About from './components/About';
import { Children } from 'react';

const App = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid #e8e8e8',
        borderRight: '1px solid #e8e8e8',
        minHeight: '100vh',
        padding: '0px',
      }}
    >
      <Header />
      <Main>
        <Intro />
        <About />
      </Main>
    </Container>
  );
};

export default App;

const Main = ({ children }: { children: React.ReactNode }) => {
  const childArray = Children.toArray(children);

  return (
    <Box display="flex" flexDirection="column">
      {childArray.map((child, index) => (
        <Box key={index} borderTop={index !== 0 ? '1px solid #e8e8e8' : 'none'}>
          {child}
        </Box>
      ))}
    </Box>
  );
};
