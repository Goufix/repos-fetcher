import React, { useState } from 'react';
import api from '../../api/axios';
import Repo from '../Repo';
import SearchBar from '../SearchBar';

//full_name, description, forks_count, stargazers_count, url
interface Users {
  full_name: string;
  description: string;
  forks_count: string;
  stargazers_count: string;
  url: string;
}

export default function App() {
  const [user, setUser] = useState<Users[]>();
  async function handleSearch(user: string) {
    const data = await api(user);
    setUser(data);
  }
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {user &&
        user.map((value) => (
          <Repo
            fullName={value.full_name}
            description={value.description}
            forks={value.forks_count}
            stars={value.stargazers_count}
            repositoryUrl={value.url}
          />
        ))}
      {/* <Repo
        fullName="lffg/adonis-api-boilerplate"
        description=":package: AdonisJs 4.0.1 API boilerplate."
        forks="0"
        stars="0"
        repositoryUrl="https://github.com/lffg/adonis-api-boilerplate"
      /> */}
    </>
  );
}
