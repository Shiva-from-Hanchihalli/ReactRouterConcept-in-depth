import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Nav from "./components/Nav";
import Help from "./components/Help";
import Careers from "./components/Careers";
import VoiceRecognitionComponent from "./components/VoiceRecognitionComponent";
import './index.css';


function App() {
  return (
    <BrowserRouter>
    <header>
      < Nav/>
      {/* <VoiceRecognitionComponent/> */}
    </header>
      <Routes>
        <Route path="/" element={<Home/>}/><Route/>
        <Route path="/about" element={<About/>}/><Route/>
        <Route path="/Help"  element={<Help/>}/><Route/>
        <Route path="/Careers" element={<Careers/>}/><Route/>
        <Route path="/VoiceRecognitionComponent" element={<VoiceRecognitionComponent/>}/><Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
