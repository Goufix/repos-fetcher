import { BookOpen, GitBranch, Star } from 'react-feather';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 350px;

  background-color: #fafafa;
  border: 1px solid #ddd;
`;

export const User = styled.span`
  width: 100%;
  max-width: 350px;
  height: 50px;

  font-weight: bold;
  font-size: 15px;
  margin: 0;
  padding: 0;
`;

export const RepositoryIcon = styled(BookOpen)`
  margin: 5px;
  max-height: 50px;
  max-width: 50px;
  float: left;
`;

export const Description = styled.p`
  display: flex;
  font-size: 11px;
  margin: 0;
  padding: 0;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
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
