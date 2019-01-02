import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'expo';
import styled from 'styled-components/native';

import Card from './Card';
import Title from './Title';

export default class VerseDay extends React.Component {

    render() {
        return (
            <Card>
                {/* Title area */}
                <View style={{flexDirection: 'row'}}>
                    <Title style={{justifyContent: 'flex-start'}}>Verse of the Day</Title>         
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Settings')} style={{marginLeft: 'auto'}} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                        <Icon.Ionicons name='md-share' style={{fontSize: 24, color: '#9B51E0'}}></Icon.Ionicons>
                    </TouchableHighlight>
                </View>

                {/* Content area */}
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit lacus maximus consectetur aliquam. Aenean efficitur, nibh scelerisque semper suscipit, lacus eros aliquet diam, nec commodo enim nulla id sapien. Praesent non libero sit amet ante commodo ornare.
                </Text>

            </Card>
        );
    }

}
