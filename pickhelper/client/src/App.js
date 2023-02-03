import {Route, Routes, Link} from 'react-router-dom';
import Index from "./components/Index";
import Jebi from "./components/Jebi";
import Roulette from "./components/Roulette";
import Dungle from "./components/Dungle";
import Tournament from "./components/Tournament";
import Guest from './components/Guest';
import JebiComent from './components/JebiComent';
import RouletteComent from './components/RouletteComent';
import DungleComent from './components/DungleComent';
import TournamentComent from './components/TournamentComent';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index/> } />
        <Route path="/jebi" element={<Jebi/>} />
        <Route path="/roulette" element={<Roulette/> } />
        <Route path="/dungle" element={<Dungle/> } />
        <Route path="/tournament" element={<Tournament/> } />
        <Route path="/guest" element={<Guest/> } />
          <Route path="/guest/jebicoment" element={<JebiComent/>}/>
          <Route path="/guest/roulettecoment" element={<RouletteComent/>}/>
          <Route path="/guest/dunglecoment" element={<DungleComent/>}/>
          <Route path="/guest/tournamentcoment" element={<TournamentComent/>}/>
        <Route path='/*' element={<Index/>}/>  
      </Routes>
    </div>
  );
}

export default App;
