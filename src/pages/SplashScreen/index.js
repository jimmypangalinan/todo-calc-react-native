import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import {colors} from '../../assets/colors'

export default function SplashScreen(props) {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('MainTabs')
    }, 5000)
  })

  const logo = {
    uri: "https://firebasestorage.googleapis.com/v0/b/todocalc-b6e65.appspot.com/o/splash%2Flogo.png?alt=media&token=3ec5d3ed-c624-4532-95cb-e2059079f161",
  }

  const ilustrator = {
    uri: "https://firebasestorage.googleapis.com/v0/b/todocalc-b6e65.appspot.com/o/splash%2Filustrator.png?alt=media&token=eed9ea57-0cdb-4ef7-98f6-639d877300b9",
  }

  return (
    <View style={styles.container}>
      <Image
            source={logo}
            style={styles.logo}
        />
      <Image
            source={ilustrator}
            style={styles.ilustrator}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{ 
    width: 290, 
    height: 140,
    bottom: -20
  },
  ilustrator:{ 
    width: 320,
    height: 400,
    bottom: -140
  }
});