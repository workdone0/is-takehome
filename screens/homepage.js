import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';

import {getData, setData} from '../utils/localStorage';
import Sale from '../templates/sale';
import {colors} from '../colors';

const Homepage = ({navigation}) => {
  const [discount, setDiscount] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [number, onChangeNumber] = React.useState(null);
  useEffect(() => {
    (async () => {
      const discontVal = await getData();
      setDiscount(discontVal);
    })();
  }, []);
  const updateDiscount = async () => {
    await setData(number);
    setDiscount(number);
    setModalVisible(false);
  };
  const renderItem = ({item}) => (
    <Pressable
      style={styles.renderItemWrap}
      onPress={() =>
        navigation.navigate('CardPage', {color: item.color, discount: discount})
      }>
      <Sale color={item.color} discount={discount} />
    </Pressable>
  );
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.appTitle}>
          <Text style={styles.heading}>Hi,</Text>
          <Pressable
            style={styles.btn}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={styles.subHeading}>Edit</Text>
          </Pressable>
        </View>
        <FlatList
          data={colors}
          style={styles.templateSection}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <Text style={styles.heading}>Edit</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Set Discount Price"
            keyboardType="numeric"
          />
          <View style={styles.btnContainer}>
            <Pressable
              style={[styles.modalBtn, {backgroundColor: '#52b788'}]}
              onPress={updateDiscount}>
              <Text>Save</Text>
            </Pressable>
            <Pressable
              style={styles.modalBtn}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
  },
  centeredView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  renderItemWrap: {
    display: 'flex',
    padding: 8,
    width: '50%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  appTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  templateSection: {
    padding: 0,
  },
  btn: {
    width: 90,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#CE6C47',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalBtn: {
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: '500',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});

export default Homepage;
