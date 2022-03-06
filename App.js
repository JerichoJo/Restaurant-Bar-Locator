import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import SearchScreen from './assets/src/screens/SearchScreen';
import ResultsShowScreen from './assets/src/screens/ResultsShowScreen';


const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
},
    {
        
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Bar & Restaraunt Locator',
            headerTintColor: 'white',
            backgroundColor:'grey',
            cardStyle: {backgroundColor: 'grey'},
            headerStyle: {
                backgroundColor: 'grey',
                
            }
        }
    });

export default createAppContainer(navigator);