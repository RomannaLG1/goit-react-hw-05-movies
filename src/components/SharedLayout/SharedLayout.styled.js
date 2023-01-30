
import { AppBar, Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
`;

export const ToolbarStyled = styled(Toolbar)`
 max-width: 1200px;
  margin: 0 auto;
padding: 0 16px;
display: flex;
justify-content: space-between;
gap: 12px;
align-items: center;

`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  &.active {
    color: blue;
    background-color: white;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;


