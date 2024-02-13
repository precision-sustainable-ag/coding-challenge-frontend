import About from "./components/About/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
