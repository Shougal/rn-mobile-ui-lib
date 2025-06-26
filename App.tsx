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
import { DismissableComponent } from './src/components/DismissableComponent';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{backgroundColor:'#749BC2', flex: 1}}>

      
      {/* <TagComponent  variant='default' label="card label" />
      <Text content='checking text component'/>
      <Link onPress={(url)=>{Linking.openURL(url)}}url='https://www.example.com' linkLabel='link check' ></Link> */}
      <View style={{paddingHorizontal:16}}>
      <DismissableComponent variant='default' label="card offers" content='Use your anb Cards to enjoy substantial offers' onPress={(url)=>{Linking.openURL(url)}}url='https://www.example.com' linkLabel='link check'/>


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
