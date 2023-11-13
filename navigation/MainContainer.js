import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import More from './screens/More';
import Sermons from './screens/Sermons';
import Notes from './screens/Notes';

const Home = 'Home';
const Sermon = 'Sermon';
const notes = 'Notes';
const more = 'More';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName;
                    let rn = route.name;

                    if(rn === Home){
                        iconName = focused ? 'home' : 'home-outline';
                    }else if(rn === Sermon){
                        iconName = focused ? 'musical-notes' : 'musical-notes-outline';
                    }else if(rn === notes){
                        iconName = focused ? 'document-text' : 'document-text-outline';
                    }else if(rn === more){
                        iconName = focused ? 'list' : 'list-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>

            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Sermon' component={Sermons}/>
            <Tab.Screen name='Notes' component={Notes}/>
            <Tab.Screen name='More' component={More}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}