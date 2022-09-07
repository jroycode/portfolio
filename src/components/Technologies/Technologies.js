import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython, DiNetbeans } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked on and had exposure to the following technologies through attending University and Bootcamps while also being self taught.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Stack</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, JS, CSS, Tailwind, React, Python, Django
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL and GraphQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNetbeans size="3rem" />
        <ListContainer>
          <ListTitle>Operating Systems</ListTitle>
          <ListParagraph>
            Experience with <br />
            Windows, Linux, MacOS, UNIX
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
