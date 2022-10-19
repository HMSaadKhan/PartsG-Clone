import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AppRoutes from "./common/AppRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {AppRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
