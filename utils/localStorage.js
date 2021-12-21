import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('discount');
    if (value !== null) {
      return value;
    } else {
      return 25;
    }
  } catch (e) {
    console.log(e);
  }
};

export const setData = async value => {
  try {
    await AsyncStorage.setItem('discount', value);
  } catch (e) {
    console.log(e);
  }
};
