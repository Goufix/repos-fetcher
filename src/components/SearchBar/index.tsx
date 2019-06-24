import React, { useState } from 'react';
import { Search } from 'react-feather';
import { Container, Input, Submit } from './styles';

interface Props {
  onSubmit(user: string): void;
}

export default function SearchBar(props: Props) {
  const [user, setUser] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();
    props.onSubmit(user);
  }
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search user repositories"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Submit type="submit">
            <Search width="20" height="20" />
          </Submit>
        </form>
      </Container>
    </>
  );
}
