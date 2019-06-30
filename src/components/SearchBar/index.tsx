import React, { useState } from 'react';
import { Search } from 'react-feather';
import { Align, Container, Input, Submit } from './styles';

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

  function handleChange(e: any) {
    setUser(e.target.value);
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Align>
            <Input
              placeholder="Digite o usuário"
              value={user}
              onChange={handleChange}
            />
            <Submit type="submit">
              <Search width="20" height="20" />
            </Submit>
          </Align>
        </form>
      </Container>
    </>
  );
}
