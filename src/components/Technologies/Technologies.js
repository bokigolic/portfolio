import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Working with a range of technologies in web development can be very beneficial for your career, as it allows you to gain a broad understanding of the field and develop a diverse skill set. Having a strong understanding of both the front end and back end of web development can make you a more well-rounded developer. Understanding how the front end and back end work together can help you build more efficient, scalable applications.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Exporience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Exporience with <br />
            Node and
            Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>

  </Section>
);

export default Technologies;
