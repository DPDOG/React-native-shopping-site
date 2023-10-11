import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ProductRoutes, options} from '.';
import {ProductListScreen, CartScreen} from '../screens';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <ProductRoutes.Navigator
        initialRouteName="ProductListScreen"
        screenOptions={options}>
        <ProductRoutes.Screen
          name="ProductListScreen"
          component={ProductListScreen}
          options={options}
        />
        <ProductRoutes.Screen
          name="CartScreen"
          component={CartScreen}
          options={options}
        />
      </ProductRoutes.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
