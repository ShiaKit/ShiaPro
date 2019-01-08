import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const CardView = styled.View`
    margin: 10px;
    padding: 15px;
    background-color: white;
    border-radius: 5px;
`;

export default class Card extends React.Component {

    render() {
        return(
            <CardView>
                {this.props.children}
            </CardView>
        );
    }

}
