import axios from 'axios';

export default async function api(user: string) {
  const data = await axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then((r) => r);

  return data.data;
}
