import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PlainHeader from './components/PlainHeader';

import useCachedResources from './hooks/useCachedResources';
import { RootNavigator } from './navigation/RootNavigator';
import { Provider } from './service/Provider';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider>
        <SafeAreaProvider>
          <SafeAreaView style={{flex:1, backgroundColor: "white"}}>
            <StatusBar barStyle="light-content" />
            <PlainHeader/>
            <RootNavigator/>
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
      
    );
  }
}
