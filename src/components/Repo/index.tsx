import React from 'react';
import Emoji from 'react-emoji-render';
import {
  Container,
  Description,
  Details,
  Footer,
  ForkIcon,
  Forks,
  Header,
  RepositoryIcon,
  Stars,
  StarsIcon,
  User
} from './styles';

interface Props {
  fullName: string;
  description: string;
  forks: string;
  stars: string;
  repositoryUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Repo(props: Props) {
  return (
    <Container>
      <Header>
        <RepositoryIcon />
        <User href={props.repositoryUrl}> {props.fullName} </User>
      </Header>
      <Footer>
        <Description>
          <Emoji text={props.description} />
        </Description>
        <Details>
          <Forks>
            <ForkIcon /> {props.forks}
          </Forks>
          <Stars>
            <StarsIcon /> {props.stars}
          </Stars>
        </Details>
      </Footer>
    </Container>
  );
}
