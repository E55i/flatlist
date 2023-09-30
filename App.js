import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DATA from './DATA';
import Row from './components/Row';
import Constants from 'expo-constants';

export default function App() {

 /* 1.tapa
 function renderRow({item}){
    return <Text>{item.lastname}</Text>
  }
  */
/* 2.tapa
const renderRow = ({item}) => {
    return <Text>{item.lastname}</Text>
}
*/

   /*3.tapa (voidaan käyttää kun vain yksi rivi)
  const renderRow = ({item}) => (
    <Text>{item.lastname}</Text>
  )
  */
 
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Row person={item}/>
          )}
        >
        </FlatList>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
  }
});
