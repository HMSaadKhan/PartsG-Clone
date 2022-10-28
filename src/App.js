import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

import "./App.css";
import AdminRoutes from "./router/AdmingRoutes";
import BuyerRoutes from "./router/BuyerRoutes";

function App() {
  const location = useLocation();
  const baseUrl = location.pathname.split("/");

  return (
    <div className="App">
      {baseUrl[1] === "admin" ? <AdminRoutes /> : <BuyerRoutes />}
    </div>
  );
}

export default App;
