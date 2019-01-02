import React from 'react';
import { Text } from 'react-native';

import Title from './Title';
import Card from './Card';

export default class DailyRecitation extends React.Component {

    render() {
        return (
            <Card>
                <Title>
                    Today's Recitations
                </Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit lacus maximus consectetur aliquam. Aenean efficitur, nibh scelerisque semper suscipit, lacus eros aliquet diam, nec commodo enim nulla id sapien. Praesent non libero sit amet ante commodo ornare.
                </Text>
            </Card>
        );
    }

}
