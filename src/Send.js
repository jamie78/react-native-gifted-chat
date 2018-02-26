import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';

export default class Send extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.text.trim().length === 0 && nextProps.text.trim().length > 0 || this.props.text.trim().length > 0 && nextProps.text.trim().length === 0) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.text.trim().length <= 0}
        style={[styles.container, this.props.containerStyle]}
        onPress={() => {
          this.props.onSend({text: this.props.text.trim()}, true);
        }}
        accessibilityTraits="button"
      >
        <View>
          {this.props.children || <Text style={[styles.text, this.props.textStyle, this.props.text.trim().length <= 0 ? styles.disableSendButton : styles.enableSendButton]}>{this.props.label}</Text>}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
  },
  text: {
    color: '#0084ff',
    fontSize: 17,
    backgroundColor: 'transparent',
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  enableSendButton: {
    opacity: 1,
  },

  disableSendButton: {
    opacity: 0.5,
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => {},
  label: 'Send',
  containerStyle: {},
  textStyle: {},
};

Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};
