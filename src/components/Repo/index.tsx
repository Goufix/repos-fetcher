import React from 'react';
import {
  Container,
  Description,
  Details,
  Footer,
  ForkIcon,
  Forks,
  RepositoryIcon,
  Stars,
  StarsIcon,
  User
} from './styles';

interface Props {
  full_name: string;
  description: string;
  forks: string;
  stars: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Repo(props: any) {
  return (
    <Container>
      <RepositoryIcon />
      <User> {props.full_name} </User>
      <Footer>
        <Description>{props.description}</Description>
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
