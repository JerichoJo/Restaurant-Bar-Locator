import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import SearchScreen from './assets/src/screens/SearchScreen';
import ResultsShowScreen from './assets/src/screens/ResultsShowScreen';
import HomeScreen from './assets/src/screens/HomeScreen';


const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Home: HomeScreen
},
    {
        
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Bar & Restaraunt Locator',
            headerTitleAlign:'center',
            headerTintColor: 'white',
            backgroundColor:'orange',
            cardStyle: {backgroundColor: 'green'},
            headerStyle: {
                backgroundColor: 'green',
                
            }
        }
    });

export default createAppContainer(navigator);