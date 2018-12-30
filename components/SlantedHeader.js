import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo';

export default class SlantedHeader extends React.Component {
  render() {
    return (
       <LinearGradient
          colors={['#4A4969', '#7072AB', '#CD82A0']}
          style={styles.headerContainer} 
          height={this.props.height}>
          {this.props.children}
        </LinearGradient>
     );
  }
}

const styles = {
  headerContainer: {
    backgroundColor: '#f00',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
  }
};