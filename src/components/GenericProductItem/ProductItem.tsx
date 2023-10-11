import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Styles} from './styles';
import {ProductItemProps} from './types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addToCart} from '../../redux';
import {checkItemAlreadyOrAdd} from '../../utils';

const ProductItem = ({id, colour, name, price, img}: ProductItemProps) => {
  const dispatch = useAppDispatch();
  const fullCart = useAppSelector(state => state.product.cart);
  const handleAddToCart = (idProduct: number, nameProduct: string) => {
    dispatch(
      addToCart(
        checkItemAlreadyOrAdd(fullCart, {
          id: idProduct,
          name: nameProduct,
          quantity: 1,
          price: price,
        }),
      ),
    );
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.productBox}>
        <Image
          source={{
            uri: img,
          }}
          style={Styles.imageBox}
        />
        <Text style={Styles.productText}>{name}</Text>
        <View style={Styles.colorPriceBox}>
          <View style={Styles.itemBox}>
            <Text style={Styles.itemText}>Color: </Text>
            <View
              style={[Styles.colorBox, {backgroundColor: colour.toLowerCase()}]}
            />
          </View>
          <View style={Styles.itemBox}>
            <Text style={Styles.itemText}>Price: Rs </Text>
            <Text style={Styles.itemText}>{price}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={Styles.addToCartButton}
          onPress={() => handleAddToCart(id, name)}>
          <Text style={Styles.addToCartButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
