import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 100, text: 'Github repos' },
  { number: 1000, text: '1000 working hours with a mentor' },
  { number: 'NACD', text: 'Maintained & Updated NACD Website' },
  { number: 'Chapters', text: 'Led Migration for 22 NACD Chapters' },
  { number: 'Optimizely', text: 'Architected Web Solutions on CMS' },
  { number: 'Testing', text: 'Web Experiments & A/B Testing' },
  { number: 'Optimization', text: 'Optimized Images for Speed & Quality' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {index < 3 ? `${card.number}+` : card.number}
          </BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
