import { TabNavigator } from 'react-navigation';
// import LoginScreen from './routes/Login';
import TableScreen from './routes/Table';
// import ImportScoresScreen from './routes/ImportScores';
import FixturesScreen from './routes/Fixtures';

export const TabNav = TabNavigator({
    // Login: {
    //     screen: LoginScreen
    // },
    Table: {
        screen: TableScreen
    },
    Fixtures: {
        screen: FixturesScreen
    }
    // AddScores: {
    //     screen: ImportScoresScreen
    // }
}, {
    tabBarOptions: {
        activeTintColor: '#f2f2f2'
    }
});
