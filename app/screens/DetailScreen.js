import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  COLORS,
  SCREEN_HEIGHT,
  extractContentBetweenParagraphTags,
} from '../common';
import {useNavigation} from '@react-navigation/native';
import TitleCard from '../components/TitleCard';
import BottomCard from '../components/BottomCard';
import Store from '../store/Store';
import { observer } from 'mobx-react';

const DetailScreen = () => {
  const navigation = useNavigation();
  const {token, refreshHandler, cardData} = Store
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: cardData?.thumbNailImage,
          }}
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.9,
          }}
        />
        <Text style={styles.header}>Only I Can Call My Dream Stupid!</Text>
        <Pressable
          style={styles.cross}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: '#343a40', fontSize: 20, textAlign: 'center'}}>
            X
          </Text>
        </Pressable>
      </View>
      <TitleCard
        cardData={cardData}
        style={{
          marginVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ced4da',
          paddingVertical: 10,
        }}
        onPress={() => refreshHandler(token)}
      />
      <View style={{paddingHorizontal: 20}}>
        {extractContentBetweenParagraphTags(cardData.text).map(
          (textContent, index) => {
            const words = textContent.split(' ');
            return (
              <View key={index}>
                {index == 2 ? (
                  <Image
                    source={{
                      uri: cardData?.thumbNailImage,
                    }}
                    style={{
                      width: '100%',
                      height: 600,
                      borderRadius: 10,
                      marginVertical: 10,
                    }}
                  />
                ) : (
                  <Text style={styles.normalText} key={index}>
                    <Text style={styles.boldText}>
                      {words.slice(0, 3).join(' ')}
                    </Text>{' '}
                    {words.slice(3).join(' ')}
                  </Text>
                )}
              </View>
            );
          },
        )}
      </View>
      <BottomCard cardData={cardData} onPress={() => refreshHandler(token)} />
      {/* Share btn */}
      <View
        style={{
          marginVertical: 20,
          alignItems: 'center',
          padding: 10,
        }}>
        <Pressable
          style={{
            backgroundColor: '#eeee',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
          }}>
          <Text style={{color: COLORS.blue}}>Share Story</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default observer(DetailScreen);
const styles = StyleSheet.create({
  normalText: {
    fontSize: 18,
    marginTop: 5,
    color: 'gray',
  },
  boldText: {
    fontWeight: 'bold',
    color: COLORS.black,
  },
  cardContainer: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.6,
    position: 'relative',
  },
  header: {
    position: 'absolute',
    fontWeight: '800',
    fontSize: 30,
    width: '70%',
    color: '#fff',
    left: 20,
    top: 10,
  },
  cross: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#eeeeee90',
    height: 30,
    width: 30,
    borderRadius: 50,
  },
});
