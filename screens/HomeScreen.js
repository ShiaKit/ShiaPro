import React from 'react';
import styled from 'styled-components/native'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { Icon } from 'expo';

import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Title from "../components/Title";

const WrapperView = styled.View`
  flex: 1;
  backgroundColor: #e5e5e5;
`

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <WrapperView>
          <PageHeader height={300} colors={['#4A4969', '#7072AB', '#CD82A0']}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Salaams, Faizaan.</Text>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Settings')} style={{marginLeft: 'auto'}}>
                <Icon.Ionicons name='md-settings' style={styles.settingsIcon}></Icon.Ionicons>
              </TouchableHighlight>
            </View>
          </PageHeader>
          <ScrollView style={styles.content}>
            <Card>
              <Title>Verse of the Day</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit lacus maximus consectetur aliquam. Aenean efficitur, nibh scelerisque semper suscipit, lacus eros aliquet diam, nec commodo enim nulla id sapien. Praesent non libero sit amet ante commodo ornare. </Text>
            </Card>
          </ScrollView>
        </WrapperView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10
  },
  header: {
    paddingTop: 60,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    justifyContent: 'flex-start'
  },
  settingsIcon: {
    marginLeft: 'auto',
    fontSize: 18,
    color: '#fff',
  }
});
