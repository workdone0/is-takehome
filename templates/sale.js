import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Sale = props => {
  return (
    <View style={styles(props).main}>
      <Text style={styles(props).subHeading}>Special Offer</Text>
      <Text style={styles(props).heading}>Sale</Text>
      <Text style={styles(props).heading}>Upto {props.discount}% off</Text>
      <Text style={styles(props).subHeading}>Buy Now</Text>
    </View>
  );
};

const styles = props =>
  StyleSheet.create({
    main: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 200,
      borderRadius: 10,
      backgroundColor: props.color,
    },
    heading: {
      fontSize: 30,
      fontWeight: '500',
      marginBottom: 10,
    },
    subHeading: {
      fontSize: 18,
      fontWeight: '500',
    },
  });

export default Sale;
