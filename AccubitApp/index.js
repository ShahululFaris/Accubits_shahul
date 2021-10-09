/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootWindow from './App/Views/RootWindow';

AppRegistry.registerComponent(appName, () => RootWindow);
