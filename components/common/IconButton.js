import React from 'react';
import { TouchableHighlight } from 'react-native';

export default class IconButton extends React.Component {

    render() {
        return(
            <TouchableHighlight {...this.props} underlayColor="transparent" hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                {this.props.children}
            </TouchableHighlight>
        );
    }
    
}
