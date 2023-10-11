import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  backText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: '600',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  backButtonBox: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleBox: {},
  titleText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  rightSide: {
    width: 50,
  },
});
