import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  container: {
    flex: 1,
  },
  flatlistWrapper: {
    justifyContent: 'space-between',
  },
  productListBox: {
    paddingBottom: 100,
    marginVertical: 40,
  },
  cartProductRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
  },
  cartBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  incDecButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#7C7C7C35',
    marginRight: 10,
  },
  incDecRightButton: {
    marginLeft: 10,
  },
  cartRowText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  prodNmeText: {
    width: 150,
  },
  cartRowDirection: {
    flexDirection: 'row',
  },
  crossColor: {
    color: 'black',
  },
});
