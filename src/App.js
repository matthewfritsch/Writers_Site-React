import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Publications from "./components/Publications";

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Publications />
      <About />
      <Footer />
    </div>
  );
}

export default App;
