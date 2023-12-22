
import { Provider } from 'react-redux';
import store from './app/redux/store';
import Navigation from './app/navigations/navigation';
import { View } from 'react-native';


export default function App() {

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }

