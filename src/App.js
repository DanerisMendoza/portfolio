// import logo from './logo.svg';
import './App.css';
import Index from "./views/Home";
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <>
      <Provider store={store}>
        <Index />
      </Provider>
    </>
  );
}

export default App;
