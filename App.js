import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { NativeBaseProvider } from 'native-base';


import CalculatorV1 from './src/pages/calculatorV1/index'
import CalculatorV2 from './src/pages/calculatorV2/index'
import SplashScreen from './src/pages/SplashScreen/index'
import Todos from './src/pages/todos'
import ButtomNavigator from './src/components/BottomNavigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

{/* <Tab.Navigator 
    screenOptions={({ route }) => ({
      headerMode: "screen",
      headerTintColor: "red",
      headerStyle: {backgroundColor: 'red'},
      tabBarIcon: ({ focused, color, size }) => {
        let iconName

        if (route.name === "Todos") {
          iconName = focused ? "ios-home" : "ios-home-outline"
        } else if (route.name == "Calculator") {
          iconName = focused ? "information-circle" : "information-circle-outline"
        } 

        return <Ionicons name={iconName} size={size} color={color} />
      },
      // tabBarActiveTintColor: theme.colors.primary["800"],
      // tabBarInactiveTintColor: "gray"
     })}>   */}

function MainTabs() {

  return (

    <Tab.Navigator tabBar={props => <ButtomNavigator {...props} />}>
      <Tab.Screen name="Todos" component={Todos} options={{ headerShown: false }} />
      <Tab.Screen name="Calculator" component={CalculatorV2} options={{ headerShown: false }} />
    </Tab.Navigator>

  )
}

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer initialRouteName="Splash" >
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
