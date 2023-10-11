import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    width: '45%',
    flex: 1,
    marginVertical: 10,
  },
  productBox: {
    borderWidth: 1,
    margin: 5,
    width: 180,
    height: undefined,
    aspectRatio: 0.48 / 1,
    padding: 5,
  },
  imageBox: {
    width: 150,
    alignSelf: 'center',
    height: undefined,
    aspectRatio: 0.63 / 1,
  },
  productText: {
    paddingHorizontal: 10,
    marginVertical: 3,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    color: 'black',
  },
  colorPriceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 13,
    fontWeight: '600',
    color: 'black',
  },
  addToCartButton: {
    backgroundColor: 'gray',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  addToCartButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: 'white',
  },
  colorBox: {
    width: 15,
    height: 15,
    borderWidth: 0.2,
  },
});
