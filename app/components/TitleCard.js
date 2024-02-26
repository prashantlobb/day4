import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../common';

const TitleCard = ({cardData = {}, onPress = () => {}, style = {}}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imgContainer}>
        {cardData?.logo && (
          <Image
            source={{
              uri: cardData.logo,
            }}
            style={{height: 55, width: 55, borderRadius: 10}}
          />
        )}
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.black, fontWeight: '800'}}>
            {cardData.title}
          </Text>
          <Text style={{color: COLORS.gray, fontSize: 12}}>
            {cardData.subTitle}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={{color: COLORS.blue}}>Refresh</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 7, color: 'grey'}}>In-App Purchase</Text>
      </View>
    </View>
  );
};

export default TitleCard;
const styles = StyleSheet.create({
  container: {
    paddingTop: '2%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  btn: {
    backgroundColor: '#dee2e6',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 50,
  },
  imgContainer: {
    flexDirection: 'row',
    gap: 10,
    width: '50%',
  },
});
