import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Styles} from './styles';
import {GenericHeader} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Cart, addToCart} from '../../redux';
import {
  create_UUID,
  totalPrice,
  incDecQuantity,
  removeFromCart,
} from '../../utils';

const CartScreen = () => {
  const dispatch = useAppDispatch();
  const fullCart = useAppSelector(state => state.product.cart);
  const handleRemoveItemFromCart = (idProduct: number) => {
    dispatch(addToCart(removeFromCart(fullCart, idProduct)));
  };
  return (
    <SafeAreaView style={Styles.parentContainer}>
      <View style={Styles.container}>
        <GenericHeader
          showBack={true}
          title="Cart"
          cartCount={fullCart.length}
        />
        <View style={Styles.productListBox}>
          <FlatList
            data={fullCart}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}: {item: Cart; index: number}) => {
              return (
                <View style={Styles.cartProductRow} key={create_UUID()}>
                  <View style={Styles.cartBox}>
                    <TouchableOpacity
                      style={Styles.incDecButton}
                      onPress={() => handleRemoveItemFromCart(item.id)}>
                      <Text style={Styles.crossColor}>X</Text>
                    </TouchableOpacity>
                    <Text style={Styles.cartRowText}>{index}</Text>
                  </View>
                  <View style={Styles.cartRowDirection}>
                    <Text style={[Styles.cartRowText, Styles.prodNmeText]}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={Styles.cartBox}>
                    <View style={Styles.cartBox}>
                      <TouchableOpacity
                        style={Styles.incDecButton}
                        onPress={() => incDecQuantity(fullCart, item.id)}>
                        <Text>+</Text>
                      </TouchableOpacity>
                      <View>
                        <Text style={Styles.cartRowText}>{item.quantity}</Text>
                      </View>
                      <TouchableOpacity
                        style={[Styles.incDecButton, Styles.incDecRightButton]}
                        onPress={() =>
                          incDecQuantity(fullCart, item.id, false)
                        }>
                        <Text>-</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={Styles.cartRowDirection}>
                    <Text style={Styles.cartRowText}>
                      Rs: {item.price * item.quantity}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={Styles.cartRowDirection}>
          <Text style={Styles.cartRowText}>Total Price: </Text>
          <Text style={Styles.cartRowText}> {totalPrice(fullCart)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
