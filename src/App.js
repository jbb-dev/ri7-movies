import  'antd/dist/antd.min.css';
import ListMovies from './components/ListMovies';
import { Button } from 'antd';
import Router from './components/Router';

const App = () => {
  return (
    <div>
      <Router />
        {/* <Button type="primary">Test</Button> */}
    </div>
  );
}

export default App;
