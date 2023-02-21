import React from 'react';
import { DiFirebase, DiReact, DiResponsive, DiGithubFull, DiMsqlServer, DiHtml5Multimedia, DiCss3, DiJavascript1, DiHeroku, DiStackoverflow, DiNodejs, DiDatabase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
As a front-end developer, I am passionate about creating engaging user experiences through elegant and efficient design. I am seeking new opportunities to apply my skills and collaborate with a dynamic team.

<br /><br />
Developed responsive web applications using React.js, HTML, CSS, and JavaScript
- Utilized media queries, flexbox, and grid to create responsive layouts
- Integrated APIs using fetch and axios to make HTTP requests and retrieve data
- Deployed applications using Heroku and managed version control using GIT
- Worked with Node.js and databases to create back-end functionality
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Exporience with <br />
            <DiReact size='2rem' /> React.js <br />
            <DiHtml5Multimedia size='2rem' /> HTML <br />
            <DiCss3 size='2rem' /> CSS <br />
            <DiJavascript1 size='2rem' /> Javascript <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Responsive Design</ListTitle>
          <ListParagraph>
            Exporience with <br />
            <DiResponsive size='2rem' /> Media queries<br />
            <DiResponsive size='2rem' /> Flexbox/grid
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>

        <ListContainer>
          <ListTitle>API Integration</ListTitle>
          <ListParagraph>
            Exporience with <br />
            <DiMsqlServer size='2rem' /> API
            Use fetch or axios <br />
            <DiMsqlServer size='2rem' /> to make HTTP request
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>

        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Exporience with <br />
            <DiHeroku size='2rem' /> Heroku <br />
            <DiGithubFull size='2rem' /> GIT <br />
            <DiStackoverflow size='2rem' /> Hostgaror <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Exporience with <br />
            <DiNodejs size='3rem' /> Node <br />
            <DiDatabase size='3rem' />  Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
    
        <ListContainer>
          <ListTitle>Personal Projects</ListTitle>
          <ListParagraph>
            Create personal projects <br />
            that demonstrate <br />
            creativity and <br />
            problem-solving skills <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>

  </Section>
);

export default Technologies;
