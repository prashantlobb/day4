import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../common';

const BottomCard = ({cardData = {}, onPress = () => {}, style = {}}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: cardData.logo,
        }}
        style={styles.img}
      />
      <Text style={styles.title}>{cardData.title}</Text>
      <Text style={{color: COLORS.gray, fontSize: 16, width: '80%'}}>
        {cardData.subTitle}
      </Text>
      <TouchableOpacity style={styles.refreshBtn} onPress={onPress}>
        <Text style={{color: '#fff', textTransform: 'uppercase'}}>Refresh</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 8, color: 'grey', marginTop: 5}}>
        In-App Purchase
      </Text>
    </View>
  );
};

export default BottomCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    marginTop: 20,
  },
  img: {height: 70, width: 70, borderRadius: 10, marginTop: 10},
  title: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '800',
    marginTop: 10,
  },
  refreshBtn: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 50,
    marginTop: 20,
  },
});
