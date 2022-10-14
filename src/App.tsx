import "styles/global.scss";
import "./i18n";
import Home from "pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "pages/contact";
import Portfolio from "components/portfolio/portfolio";
import Mouse from "components/constant/images";

function App(): JSX.Element {
  return (
    <div className="App">
      < BrowserRouter>
        <Routes>
          <Route index element={< Home />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/portfolio" element={< Portfolio />} />
        </Routes>
        <Mouse/>
      </BrowserRouter>
    </div>
  );
}

export default App;
