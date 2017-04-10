// 1 - Import a library to help create a Component
import React from 'react';
import { AppRegistry , View} from 'react-native';
import Header from './src/components/header'; //need to specify the relative path for files that we write
import AlbumList from './src/components/AlbumList'; //need to specify the relative path for files that we write



// Create a component ////important to wrap different elements into view
const App = () => (
    <View style={{ flex:1 }}>
      <Header headerText={'Albums'} />
      <AlbumList/>
    </View>
    );


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
