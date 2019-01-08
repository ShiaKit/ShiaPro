import React from 'react';
import styled from 'styled-components/native';

const TitleText = styled.Text`
    font-size: 24px;
    font-weight: 500;
    font-family: raleway;
    color: #9B51E0;
    padding-bottom: 10px;
`;

export default class Title extends React.Component {

    render() {
        return (
            <TitleText>{this.props.children}</TitleText>
        );
    }

}
