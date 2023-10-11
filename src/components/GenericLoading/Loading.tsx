import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Styles} from './styles';

const Loading = () => {
  return (
    <View style={Styles.loadingContainer}>
      <ActivityIndicator size="large" color={'#000000'} />
    </View>
  );
};

export default Loading;
