/* eslint-disable no-undef */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
