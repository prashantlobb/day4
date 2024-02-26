import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { observer } from 'mobx-react-lite';
import counterStore from './app/store/CounterStore';

const App = observer(() => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:'center',marginVertical:10,fontSize:20,color:"#000"}}>Count: {counterStore.count}</Text>
      <Pressable style={{backgroundColor:'blue',padding:10}} onPress={()=>counterStore.increment()}>
        <Text style={{fontSize:18,color:'#fff',textAlign:'center'}}>Increment</Text>
      </Pressable>

      <Pressable style={{backgroundColor:'blue',padding:10,marginTop:10}} onPress={()=>counterStore.decrement()}>
        <Text style={{fontSize:18,color:'#fff',textAlign:'center'}}>Decrement</Text>
      </Pressable>
    </View>
  );
});

export default App;