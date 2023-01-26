import {Route, Routes, Link} from 'react-router-dom';
import Index from "./components/Index";
import Jebi from "./components/Jebi";
import Roulette from "./components/Roulette";
import Dungle from "./components/Dungle";
import Tournament from "./components/Tournament";
import Guest from "./components/Guest";

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
      </Routes>
    </div>
  );
}

export default App;
