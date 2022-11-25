import  'antd/dist/antd.min.css';
import ListMovies from './components/ListMovies';
import { Button } from 'antd';
import Router from './components/Router';
import { AppContext } from './store/AppContext';

const App = () => {
  return (
    <AppContext>
      <Router />
    </AppContext>
  );
}

export default App;
