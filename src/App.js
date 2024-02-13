import About from "./components/About/About";
import License from "./License";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/license" element={<License />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
