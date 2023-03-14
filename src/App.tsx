import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Items, Pokemon, Pokemons } from "./pages";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/items" element={<Items />} />
          <Route path="/" element={<Pokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
