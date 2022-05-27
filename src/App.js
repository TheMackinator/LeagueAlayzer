import './App.scss';
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import MatchHistory from './components/MatchHistory';

function App() {
  return (
    <div className="app">
      <NavMenu />
      <Home />
      <Route path="/:summonerName" component={MatchHistory} />
    </div>
  );
}

export default App;
