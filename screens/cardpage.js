import React from 'react';
import {View, StyleSheet, Text, Alert, Pressable} from 'react-native';
import Sale from '../templates/sale';
const CardPage = props => {
  return (
    <View style={styles.main}>
      <View style={styles.cardContainer}>
        <Sale
          color={props.route.params.color}
          discount={props.route.params.discount}
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={() => Alert.alert('Saved')}>
          <Text>Save</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => Alert.alert('Shared Successfully')}>
          <Text>Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
  },
  cardContainer: {
    display: 'flex',
    flex: 2,
    padding: 20,
  },
  btnContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column-reverse',
    padding: 10,
  },
  btn: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
  },
});
export default CardPage;
