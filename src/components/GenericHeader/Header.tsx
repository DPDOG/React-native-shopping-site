import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Styles} from './styles';
import {HeaderProps} from './types';
import {GenericCart} from '..';

const Header = ({showBack = false, title, cartCount = 0}: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <View style={Styles.backButtonBox}>
        {showBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={Styles.backText}>{'< Back'} </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={Styles.titleBox}>
        <Text style={Styles.titleText}>{title}</Text>
      </View>
      <View style={Styles.rightSide}>
        <GenericCart count={cartCount} />
      </View>
    </View>
  );
};

export default Header;
