import React from 'react';
import { DiFirebase, DiReact, DiResponsive, DiGithubFull, DiMsqlServer, DiHtml5Multimedia, DiCss3, DiJavascript1, DiHeroku, DiNodejs, DiDatabase, DiWordpress } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a full-stack developer with a marketing and web production background, I am dedicated to crafting engaging, responsive web applications. I’m currently seeking opportunities to further apply my expertise, particularly in front-end technologies and CMS platforms like Optimizely and WordPress.
      <br /><br />
      At NACD, I managed content migrations, optimized images for performance, and conducted A/B testing on the Optimizely CMS to ensure a seamless user experience across platforms.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js, HTML, CSS, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiResponsive size='3rem' />
        <ListContainer>
          <ListTitle>Responsive Design</ListTitle>
          <ListParagraph>
            Built responsive layouts using <br />
            Media Queries, Flexbox, Grid
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiMsqlServer size='3rem' />
        <ListContainer>
          <ListTitle>API Integration</ListTitle>
          <ListParagraph>
            Integrated APIs with <br />
            Fetch & Axios
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiHeroku size='3rem' />
        <ListContainer>
          <ListTitle>Deployment & Version Control</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Heroku, Git, HostGator
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size='3rem' />
        <ListContainer>
          <ListTitle>Back-End Development</ListTitle>
          <ListParagraph>
            Worked with Node.js and <br />
            various databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiWordpress size='3rem' />
        <ListContainer>
          <ListTitle>CMS & Content Management</ListTitle>
          <ListParagraph>
            Proficient in Optimizely & WordPress <br />
            Managed NACD’s website and <br />
            executed content migration
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGithubFull size='3rem' />
        <ListContainer>
          <ListTitle>Personal Projects</ListTitle>
          <ListParagraph>
            Developed projects to <br />
            showcase creativity and <br />
            problem-solving skills
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
