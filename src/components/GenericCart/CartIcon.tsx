import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Styles} from './styles';
import {CartButtonProps} from './types';

const CartButton = ({count = 0}: CartButtonProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CartScreen' as never)}>
      <Text style={Styles.cartText}>Cart</Text>
      <View style={Styles.cartCountIcon}>
        <Text style={Styles.cartCountColor}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;
