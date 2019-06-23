import React from 'react';
import {
  Container,
  Description,
  Details,
  Footer,
  ForkImage,
  Forks,
  ProfilePhoto,
  Stars,
  StarsImage,
  User
} from './styles';

export default function Repo() {
  return (
    <Container>
      <ProfilePhoto />
      <User> lffg / adonis-api-boilerplate </User>
      <Footer>
        <Description>AdonisJs 4.0.1 API boilerplate.</Description>
        <Details>
          <Forks>
            <ForkImage /> 10
          </Forks>
          <Stars>
            <StarsImage /> 10
          </Stars>
        </Details>
      </Footer>
    </Container>
  );
}
