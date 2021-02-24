import React from 'react';
import {  withRouter } from 'react-router-dom';
import brandImage from './LOGOS/TMDB.svg';
import { Col } from 'antd';
import {IMAGE, Menu,NAVLINK} from './NavigatorStyle'

function Navigator() {
    return (
        <Menu >
            <Col><IMAGE alt="BrandLogo" src={brandImage}/></Col>
            <Col><NAVLINK to="/">Movies</NAVLINK></Col>
            <Col><NAVLINK to="/TVshows">TVshows</NAVLINK></Col>
            <Col><NAVLINK to="/movie"></NAVLINK></Col>
            <Col><NAVLINK to="/tv"></NAVLINK></Col>
        </Menu>
    )
}
export default withRouter(Navigator);