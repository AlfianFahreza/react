import logo from './logo.svg';
import './App.css';
import Intro from './Component/intro';
import BestGame from './Component/BestGame';
import Navigate from './Component/Navigate';
import TrendGame from './Component/TrendGame';

function App() {
  return (
    <div>
      <div className = "">
          <Intro/>
          <Navigate/>
      </div>

      <div className = "">
          <TrendGame/>
      </div>

      <div className = "">
          <BestGame/>
      </div>
    </div>

  );
}

export default App;
