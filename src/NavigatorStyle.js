import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const Menu =  styled.nav `
    display:flex;
    margin: 0;
    padding-left: 40px;
    background-color: #001a33;
   
`;

export const NAVLINK = styled(NavLink) `
    display: block;
    color: white;
    font-size:16px;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: 500;
`;

export const IMAGE =styled.img `
    height: 50px;
    width: 110px;
`;