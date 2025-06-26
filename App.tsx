/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, SafeAreaView, Linking } from 'react-native';

import { TagComponent } from './src/components/TagComponent';
import {Text} from './src/components/TextComponent'
import {Link} from './src/components/LinkComponent'
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <TagComponent  variant='default' label="card label" />
      <Text content='checking text component'/>
      <Link onPress={(url)=>{Linking.openURL(url)}}url='https://www.example.com' linkLabel='link check' ></Link>
      <NewAppScreen templateFileName="App.tsx" />
    </View>

    </SafeAreaView>
          
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
