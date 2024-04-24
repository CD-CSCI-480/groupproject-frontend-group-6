import WelcomeScreen from "./screens/WelcomeScreen";
import CustomerSignUp from "./screens/CustomerSignUp";
import SetUpBusinessScreen from "./screens/SetUpBusinessScreen";
import Reviews from "./screens/Reviews";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name ="Home" component ={WelcomeScreen} />
                <Stack.Screen name= "CustomerSignUp" component ={CustomerSignUp} />
                <Stack.Screen name="Set Up" component ={SetUpBusinessScreen} />
                <Stack.Screen name="Reviews" component ={Reviews} />
            </Stack.Navigator>
        </NavigationContainer>


    );
}