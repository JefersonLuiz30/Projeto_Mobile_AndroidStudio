import Login from "../pages/login";
// import Register from "../pages/register";
import Home from "../pages/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AgendaLista from "../pages/agendaLista";

const Tab = createBottomTabNavigator();

export default function AuthRouters(){
   return(
    <Tab.Navigator>
         <Tab.Screen 
            name="Home"
            component={Home} 
            options={{title: 'Home'}}
        />
        <Tab.Screen 
            name="Login"
            component={Login} 
            options={{title: 'Login'}}
        />
        <Tab.Screen 
            name="Agenda"
            component={AgendaLista} 
            options={{title: 'Agenda Lista'}}
        />
      </Tab.Navigator>
   )
}