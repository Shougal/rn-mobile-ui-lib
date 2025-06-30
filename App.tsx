/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StyleSheet, useColorScheme, View, SafeAreaView, Linking } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

import { DismissBanner } from './src/components/DismissBanner';


function App() {

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.contentContainer}>

        <DismissBanner linkLabel='see offers' 
        onPress={() => { Linking.openURL('https://www.example.com') }} 
        tagLabel='card offers'
        tagVariant='default'
        textContent='Use your anb Cards to enjoy substantial offers'/>

        <DismissBanner linkLabel='see offers' 
        onPress={() => { Linking.openURL('https://www.example.com') }} 
        tagLabel='card offers'
        tagVariant='default'
        textContent='Use your anb Cards to enjoy substantial offers' />

      </View>




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#749BC2',

    //TODO: DO i add a width here, 
    // telling that width should not exceed screen width?
    // if not, should i say flex-wrap?

    // width: 100 vw?
    width: vw(100),




  },
  contentContainer: {

    // should flex direction be row?
    // TODO part2) do i say that max: width should be 100% of parent?
    maxWidth: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'beige',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default App;
