import React from 'react';
import styled from 'styled-components/native'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Icon } from 'expo';

import PageHeader from "../components/PageHeader";
import IconButton from '../components/IconButton';
import VerseDay from '../components/VerseDay';
import DailyRecitation from '../components/DailyRecitation';
import UntilNextAdhan from '../components/UntilNextAdhan';

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
          <PageHeader height={275} colors={['#4A4969', '#7072AB', '#CD82A0']}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Salaams, Faizaan.</Text>
              <IconButton onPress={() => this.props.navigation.navigate('Settings')} style={{marginLeft: 'auto'}}>
                <Icon.Ionicons name='md-settings' style={styles.settingsIcon}></Icon.Ionicons>
              </IconButton>
            </View>
            <UntilNextAdhan/>
          </PageHeader>
          <ScrollView style={styles.content}>
            <VerseDay/>
            <DailyRecitation/>
          </ScrollView>
        </WrapperView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
  },
  header: {
    paddingTop: 60,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Nunito',
    color: '#fff',
    justifyContent: 'flex-start'
  },
  settingsIcon: {
    marginLeft: 'auto',
    fontSize: 20,
    color: '#fff',
  }
});
