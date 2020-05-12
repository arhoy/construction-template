import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  display: inline-block;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.7rem 2rem;
  height: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

export const ButtonFilled = styled(Button)`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

export const ButtonOutline = styled(Button)`
  border: 2px solid ${(props) => props.theme.colors.black};
  display: block;
  box-sizing: border-box;
`;

export const ButtonWhite = styled(Button)`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.secondary};
`;
