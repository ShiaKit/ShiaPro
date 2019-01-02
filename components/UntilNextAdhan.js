import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'expo';

import styled from 'styled-components/native';

const MainView = styled.View`
    margin: 20px;
    border-radius: 5px;
    background: rgba(74, 73, 105, 0.5);
`;

// Animatable.Text animation="fadeIn" iterationCount={"infinite"} direction="alternate" delay={2000}

export default class UntilNextAdhan extends React.Component {
    render() {
        return(
            <Grid>
                <Row style={{margin: 20, borderRadius: 5, backgroundColor: 'rgba(74, 73, 105, 0.5)'}}>
                    <Col size={65} style={{justifyContent: 'center'}}>
                        <Text style={styles.timeText}>00:32</Text>
                        <Text style={styles.timeDesc}>Minutes until next Adhan</Text>
                    </Col>
                    <Col size={35} style={{backgroundColor: 'white', borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: 'center'}}>
                        <Icon.Ionicons name="md-navigate" style={styles.navIcon}></Icon.Ionicons>
                        <Text style={styles.navText}>Find Qibla</Text>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    timeText: {
        fontSize: 48,
        fontFamily: 'Oswald',
        textAlign: 'center',
        color: 'white'
    },
    timeDesc: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase'
    },
    navIcon: {
        fontSize: 64,
        color: '#9B51E0',
        textAlign: 'center'
    },
    navText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#9B51E0',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase'
    }
});
