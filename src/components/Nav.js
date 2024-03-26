import { Link, NavLink } from "react-router-dom";
import '../index'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';



const Nav = () => {
    return (<nav>
        <h1>jobarouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Help">Help</NavLink>
        <NavLink to="/Careers">Careers</NavLink>
        <NavLink to="/VoiceRecognitionComponent">speak</NavLink>
        {/* <KeyboardVoiceIcon fontSize="large" style={{ marginLeft: '10px' }} /> */}
      </nav>);
}

export default Nav;