import Navigation from "./components/navigation/navigation";

import News from "./components/news/news";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
