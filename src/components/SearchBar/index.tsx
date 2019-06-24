import React from 'react';
import { Search } from 'react-feather';
import { Container, IconWrapper, Input } from './styles';

export default function SearchBar() {
  return (
    <>
      <Container>
        <Input />
        <IconWrapper>{<Search />}</IconWrapper>
      </Container>
    </>
  );
}
