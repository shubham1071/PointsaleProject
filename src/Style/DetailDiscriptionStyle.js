import { Row,Col } from 'antd';
import styled from 'styled-components'

export const Discription = styled(Row)`
    width: 100%;
    height: 70vh;
    background: #001433;
    background-size: cover;
`;
export const CastMain = styled.div`
    width: 100%;
    height: 100%;   
    background: #5f5f5f;
`;

export const CastDiv = styled.div`
    vertical-align: top;
    background-image: linear-gradient(to right, rgba(333,3,122,0) 0%, rgba(206, 206, 206, 0.541) 100%);
    padding-top: 20px;
    padding-bottom: 18px;
    overflow: scroll;
    overflow-y:hidden;
    width:100%;
    float: left;
    display: flex;
`;
export const InnerDescription = styled(Col)`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
`;
export const Details = styled.div`
    color: white;
    padding-left: 50px;
    width: 90%;
`;
export const Tagline = styled(Row)`
    color: lightgray;
    font-style: italic;
    font-weight: 700;
    font-size:17px;
`;