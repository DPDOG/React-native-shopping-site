import React from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {checkIsLoading} from '../../utils';
import {Styles} from './styles';
import {
  GenericLoading,
  GenericHeader,
  GenericProductItem,
} from '../../components';
import {fetchProductsAsync, selectProductsList, Product} from '../../redux';

const ProductListScreen = () => {
  const dispatch = useAppDispatch();
  const callStatus = useAppSelector(state => state.product.status);
  const cartCountOnState = useAppSelector(state => state.product.cart.length);
  const productList = useAppSelector(selectProductsList);

  const initFetch = React.useCallback(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  React.useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <SafeAreaView style={Styles.parentContainer}>
      {checkIsLoading(callStatus) ? (
        <GenericLoading />
      ) : (
        <View style={Styles.container}>
          <GenericHeader
            showBack={false}
            title="Products"
            cartCount={cartCountOnState}
          />
          <View style={Styles.productListBox}>
            <FlatList
              data={productList}
              columnWrapperStyle={Styles.flatlistWrapper}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({item}: {item: Product}) => {
                return (
                  <GenericProductItem
                    id={item.id}
                    colour={item.colour}
                    name={item.name}
                    price={item.price}
                    img={item.img}
                  />
                );
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductListScreen;
