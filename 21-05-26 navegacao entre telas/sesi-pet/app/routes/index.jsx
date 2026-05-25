import {createStackNavigator, CreateStackNavigator} from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';

//import das telas
import Login from '../pages/login'
import Atendimento from '../pages/atendimento' 
import Cadastro from '../pages/cadastro'
import Profissionais from '../pages/profissionais'


//import dos navegadores
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Draw = createDrawerNavigator();



function abasInferiores(){
    <Tabs.Navigator 
    screenOptions={({route}) => ({
        headerShown: true, 
        tabBarActiveTintColor: '#ff914d', 
        tabBarInactiveTintColor: '#777',
        tabBarIcon: ({color, size, facused}) => {
            let nomeIcone = 'elipse-outline';

            if(route.name === 'atendimento'){
                nomeIcone = focused ? 'calendar' : 'calendar-outline'
            }
            if(route.name === 'profissionais'){
                nomeIcone = focused ? 'people' : 'people-outline'
            }
            return <Ionicon name={nomeIcone} size={size} color={color}/>
        }
    })}> 
    <Tabs.Screen name='atendimentos' component={<Atendimento />}/>
    <Tabs.Screen name='profissionais' component={<Profissionais />}/>
    </Tabs.Navigator>
}



function menuSuperior(){
    <Draw.Navigator 
    screenOptions={({route}) => ({
        headerShown: true, 
        tabBarActiveTintColor: '#ff914d', 
        tabBarInactiveTintColor: '#777',
        tabBarIcon: ({color, size, facused}) => {
            let nomeIcone = 'menu-outline';

            if(route.name === 'atendimento'){
                nomeIcone = focused ? 'calendar' : 'calendar-outline'
            }
            if(route.name === 'pofissionais'){
                nomeIcone = focused ? 'people' : 'people-outline'
            }
            return <Ionicon name={nomeIcone} size={size} color={color}/>
        }
    })}> 
    <Draw.Screen name='inicio' component={<abasInferiores />}/>
    <Draw.Screen name='atendimentos' component={<Atendimento />}/>
    <Draw.Screen name='profissionais' component={<Profissionais />}/>
    </Draw.Navigator>
}

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='cadastro' component={Cadastro} options={{title: 'cadastro de usuario'}}/>
            <Stack.Screen name='principal' component={menuSuperior} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}