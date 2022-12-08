import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import MainNavigator from './src/navigation/mainNavigator';

const App = (): JSX.Element => {
  useEffect(() => {
    const getFirebaseToken = async () => {
      const generatedToken = await messaging().getToken();
      return generatedToken;
    };

    const requestPermission = async () =>
      messaging()
        .requestPermission()
        .then(() => {
          getFirebaseToken();
        })
        .catch((error: Error) => {
          console.warn(`${error} permission rejected`);
        });

    const checkPermission = async () => {
      const enabled = await messaging().hasPermission();
      if (enabled) {
        getFirebaseToken();
      } else {
        requestPermission();
      }
    };

    checkPermission();
  }, []);

  return (
    <NavigationContainer>
      <MainNavigator />
      <Toast />
    </NavigationContainer>
  );
};

export default App;
