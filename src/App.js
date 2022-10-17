import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUp/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <SignUpPage />
    </div>
  );
}

export default App;
