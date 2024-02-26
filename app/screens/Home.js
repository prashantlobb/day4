import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ActivityIndicator,
  Button,
  StyleSheet,
} from 'react-native';
import React  from 'react';
import moment from 'moment';
import {COLORS} from '../common';
import {useNavigation} from '@react-navigation/native';
import TitleCard from '../components/TitleCard';
import Store from '../store/Store';
import { observer } from 'mobx-react';

const Home = () => {
  const {logout, token, user, cardData, isLoading,refreshHandler} = Store
  const navigation = useNavigation();
  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.blue} />
      ) : (
        <SafeAreaView style={styles.container}>
          <Text style={styles.date}>{moment().format('dddd YY MMMM')}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{color: COLORS.black, fontSize: 26, fontWeight: '600'}}>
              Today
            </Text>
            <View style={styles.avatar}>
              <Text style={styles.avatarTxt}>{user?.slice(0, 2)}</Text>
            </View>
          </View>
          {/* Card */}

          <View
            style={styles.card}
           >
            {cardData?.thumbNailImage && (
              <Pressable
              onPress={() => {
                navigation.navigate('Detail', {cardData});
              }}
              style={{height:'80%',width:'100%'}}
              >

              <Image
                source={{
                  uri: cardData?.thumbNailImage,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                />
                </Pressable>
            )}
            <TitleCard
              cardData={cardData}
              onPress={() => refreshHandler(token)}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Button title="Logout" onPress={()=>{
              logout()
              navigation.navigate('Login')
            }} />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  date: {
    color: COLORS.gray1,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.gray,
    alignContent: 'center',
    justifyContent: 'center',
  },
  avatarTxt: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.black,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  card: {
    flex: 0.7,
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    overflow: 'hidden',
    gap: 10,
  },
});
