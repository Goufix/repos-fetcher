import styled from 'styled-components';

export const Input = styled.input`
  flex-grow: 1;
  background: #fff;
  border: 2px;
  border-color: #ddd;
  border-radius: 5px;
  border-style: solid;
  max-width: 350px;
  width: 100%;
  height: 30px;
  font-size: 15px;
  padding: 5px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  outline: 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
`;

export const IconWrapper = styled.div`
  display: inline-block;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
