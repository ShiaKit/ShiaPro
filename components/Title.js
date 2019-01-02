import React from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';
import styled from 'styled-components/native';

const TitleText = styled.Text`
    font-size: 24px;
    font-weight: 500;
    font-family: Raleway;
    color: #9B51E0;
    padding-bottom: 10px;
`;

export default class Title extends React.Component {

    // componentDidMount() {
    //     Font.loadAsync({
    //         'Raleway': require('../assets/fonts/Raleway-Medium.ttf')
    //     });   
    // }

    render() {
        return (
            <TitleText>{this.props.children}</TitleText>
        );
    }

}
