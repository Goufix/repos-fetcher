import React from 'react';
import Repo from '../Repo';
import SearchBar from '../SearchBar';

export default function App() {
  return (
    <>
      <SearchBar />
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
