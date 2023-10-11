import {createStackNavigator} from '@react-navigation/stack';

export type ProductsScreenRoutes = {
  ProductListScreen: undefined;
  CartScreen: undefined;
};

export const ProductRoutes = createStackNavigator<ProductsScreenRoutes>();
