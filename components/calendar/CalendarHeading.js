import React from 'react'
import { Text, View } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

export default class CalendarHeading extends React.Component {

    render() {
        return(
            <Grid>
                <Row>
                    <Col><Text>Test</Text></Col>
                    <Col><Text>Test2</Text></Col>
                </Row>
            </Grid>
        );
    }

}
