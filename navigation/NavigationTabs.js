import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';
import AboutScreen from '../screens/AboutScreen';
import  SearchScreen  from '../screens/SearchScreen';
import { Foundation as FoundationIcons } from 'react-native-vector-icons';
import { Tab } from '@rneui/themed';
const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        <Tabs.Navigator>
                 <Tabs.Screen
                name="HomeScreen"

                component={HomeScreen}
                options={
                    {

                        tabBarlabel: "Accueil",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Accueil",
                        tabBarIcon:({color, size}) => (
                            <FoundationIcons name="home" color={color} size={size} />)
                    }
                }
            />
 <Tabs.Screen
                name="SearchScreen"

                component={SearchScreen}
                options={
                    {

                        tabBarlabel: "Rechercher",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Rechercher",
                        tabBarIcon:({color, size}) => (
                            <FoundationIcons name="magnifying-glass" color={color} size={size} />)
                    }
                }
            />
 <Tabs.Screen
                name="PhotoScreen"

                component={PhotoScreen}
                options={
                    {

                        tabBarlabel: "Photo",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Photo",
                        tabBarIcon:({color, size}) => (
                            <FoundationIcons name="camera" color={color} size={size} />)
                    }
                }
            />

 <Tabs.Screen
                name="AboutScreen"

                component={AboutScreen}
                options={
                    {

                        tabBarlabel: "A propos",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "A propos",
                        tabBarIcon:({color, size}) => (
                            <FoundationIcons name="widget" color={color} size={size} />)
                    }
                }
            />

        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({})

export default NavigationTabs;
