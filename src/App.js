import "./App.css";

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Connect } from "./components/connect/Connect";



function App() {
  return (
    <div className="App">
    
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects/>
      <Connect/>
    </div>
  );
}

export default App;
