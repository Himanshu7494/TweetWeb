import React from 'react';
import {View} from 'react-native';
import {  WebView } from 'react-native-webview';
 
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://x.com/hcltech/status/1714619864671719889?s=20' }}
        javaScriptEnabled={true} 
        domStorageEnabled={true}  
      />
    </View>
  );
}
 
export default App;