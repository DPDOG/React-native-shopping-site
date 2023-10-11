import 'react-native-gesture-handler/jestSetup';
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('@react-native-firebase/analytics', () => () => {
  return {
    logEvent: mockedFirebaseAnalyticsLogEvent,
    logLogin: mockedFirebaseAnalyticsLogLogin,
    setUserId: mockedFirebaseAnalyticsSetUserId,
  };
});
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
// jest.mock('react-native-device-info', () =>
//   require('react-native-device-info/jest/react-native-device-info-mock'),
// );

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
jest.mock('axios', () => ({
  post: () => Promise.resolve({data: 'data'}),

  interceptors: {
    request: {
      use: jest.fn(),
      eject: jest.fn(),
    },
    response: {
      use: jest.fn(),
      eject: jest.fn(),
    },
  },
}));

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock(
  '@react-navigation/stack/lib/commonjs/views/GestureHandlerNative',
  () => {
    const RN = require('react-native');
    return {
      PanGestureHandler: RN.View,
      GestureHandlerRootView: RN.View,
    };
  },
);
