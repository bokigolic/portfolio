import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello,  <br />
        My name is Bojan
      </SectionTitle>
      <SectionText>I'm a passionate web developer with a focus on front-end development and a keen eye for design</SectionText>
      <Button onClick={() => window.location = 'https://bojangolic.com/'}>Learn More</Button>

    </LeftSection>

  </Section>
);

export default Hero;