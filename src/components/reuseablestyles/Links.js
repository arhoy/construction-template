import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const NoStyleLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;

export const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;
