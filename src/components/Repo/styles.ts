import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 350px;

  background-color: #ddd;
  border: 1px solid #333;
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

export const ProfilePhoto = styled.img`
  margin: 0;
  padding: 0;
  max-height: 50px;
  max-width: 50px;
  float: left;
`;
