import Login from "../pages/login";
// import Register from "../pages/register";
import Home from "../pages/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserList from "../pages/userList";
import AgendaList from "../pages/agendaLista";

const Tab = createBottomTabNavigator();

export default function AuthRouters(){
   return(
    <Tab.Navigator screenOptions={{headerShown: true}}>
         <Tab.Screen 
            name="Home"
            component={Home} 
            options={{title: 'Home'}}
        />
        <Tab.Screen 
            name="Agenda"
            component={AgendaList} 
            options={{title: 'Agenda Lista'}}
        />        
        <Tab.Screen 
            name="Login"
            component={Login} 
            options={{title: 'Login'}}
        />
      </Tab.Navigator>
   )
}