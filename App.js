import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, PhotoScreen, AboutScreen, Photodetails, SearchScreen } from './screens';
import { NavigationTabs } from './navigation';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator  >
         <Stack.Screen
          name="NavigationTabs"
          component={NavigationTabs}
          options={{ headerShown: false, }}
           />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, }}
          
          
       />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen} />
         <Stack.Screen
          name="PhotoScreen"
          component={PhotoScreen} />
        <Stack.Screen
          name="Photodetails"
          component={Photodetails} />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen} />
          

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
