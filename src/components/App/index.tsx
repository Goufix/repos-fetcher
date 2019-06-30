import React, { useState } from 'react';
import Repo from '../Repo';
import SearchBar from '../SearchBar';

export default function App() {
  const [user, setUser] = useState('');
  function handleSearch(user: string) {
    setUser(user);
  }
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Repo
        fullName="lffg/adonis-api-boilerplate"
        description=":package: AdonisJs 4.0.1 API boilerplate."
        forks="0"
        stars="0"
        repositoryUrl="https://github.com/lffg/adonis-api-boilerplate"
      />
    </>
  );
}
