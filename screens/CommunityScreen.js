import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'expo';
import PageHeader from '../components/PageHeader';

/*
This page will include a calendar with upcoming Islamic events,
as well as an Islamic birthday feature and link to the prayer timings listing (that's also
accessible on the main homepage).
*/
export default class CommunityScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <PageHeader height={200} colors={['#9B51E0', '#BB6BD9']}>
          <View style={styles.header}>
            <Text>Community page.</Text>
          </View>
        </PageHeader>
        <ScrollView style={styles.content}>
          <Text>This is a dummy page, awaiting real contents.</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 10
  },
  header: {
    paddingTop: 60,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  }
});
