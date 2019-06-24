import { Book, GitBranch, Star } from 'react-feather';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 350px;

  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 5px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const User = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  margin: 0;
  padding: 0;
  :visited {
    color: #000;
  }
`;

export const RepositoryIcon = styled(Book)`
  max-height: 30px;
  max-width: 30px;
  color: #6398ed;
  float: left;
  margin-right: 5px;
`;

export const Description = styled.p`
  font-size: 11px;
  margin: 0;
  padding: 0;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Forks = styled.p`
  margin-top: 0;
  margin: 0 3px;
  display: flex;
  font-size: 10px;
  color: #6398ed;
`;

export const ForkIcon = styled(GitBranch)`
  width: 15px;
  height: 15px;
  margin-top: 1px;
  margin-right: 3px;
`;

export const StarsIcon = styled(Star)`
  width: 15px;
  height: 15px;
  margin-top: 1px;
`;

export const Stars = styled.p`
  margin-top: 0;
  margin: 0 3px;
  display: flex;
  font-size: 10px;
  color: #6398ed;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;
