import {combineReducers} from 'redux';
import {loginReducer} from '../Components/LoginForm/loginReducer';
import {dashboardReducer} from '../Components/Dashboard/dashboardReducer';

const rootReducer = combineReducers({
    LoginReducers:loginReducer,
    DashboardReducer:dashboardReducer
})

export default rootReducer
