import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { SKILL_ITEMS } from '../../constant/skill';

const Skill = () => {
  const categories = ['Frontend', 'Backend', 'DevOps'];

  const skillNameVariants = {
    rest: { opacity: 0, y: 0 },
    hover: { opacity: 1, y: -8 },
  };

  return (
    <Container>
      <Typography variant="h3" fontSize={15} color="#121212" fontWeight={400}>
        SKILLS
      </Typography>

      {categories.map((category) => (
        <CategorySection key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <SkillGrid>
            {SKILL_ITEMS.filter((skill) => skill.type === category).map(
              (skill) => (
                <SkillItem
                  key={skill.name}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Icon
                    src={skill.icon.src}
                    alt={skill.icon.alt}
                    transition={{ type: 'spring', stiffness: 300 }}
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.1 },
                    }}
                  />
                  <SkillName
                    variants={skillNameVariants}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.name}
                  </SkillName>
                </SkillItem>
              )
            )}
          </SkillGrid>
        </CategorySection>
      ))}
    </Container>
  );
};

export default Skill;

// Styled Components
const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 16px;
  border-top: 1px solid #e8e8e8;
`;

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CategoryTitle = styled(Typography)`
  font-size: 14px !important;
  font-weight: 500 !important;
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 64px;
  height: 64px;
  cursor: pointer;
`;

const Icon = styled(motion.img)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const SkillName = styled(motion.span)`
  background-color: #121212;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
`;
