/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, SafeAreaView ,Text} from 'react-native';

import { TagComponent } from './src/components/TagComponent';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <TagComponent  variant='default' label="card label" />
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
