import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

export default class CalendarHeading extends React.Component {

    render() {
        return(
            <Grid style={styles.wrapper}>
                <Row>
                    <Col size={40}><Text>Test</Text></Col>
                    <Col size={60}><Text>Test2</Text></Col>
                </Row>
            </Grid>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        marginLeft: 60,
        marginTop: 60
    }
})
