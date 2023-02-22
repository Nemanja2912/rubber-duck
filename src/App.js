import Navigation from "./components/navigation/navigation";

import News from "./components/news/news";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
