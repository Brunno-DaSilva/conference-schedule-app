import "./app.css";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />

      <Footer />
    </div>
  );
}

export default App;
