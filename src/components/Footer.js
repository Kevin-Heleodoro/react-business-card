import { FaLinkedin, FaGithub, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {FaMoon, FaSun} from 'react-icons/fa';


export default function Footer(props){
  
  const themeBtn = () => {
    const btn = props.theme === 'dark' ? <FaSun /> : <FaMoon />;
    return btn;
  }

  return (
    <footer>
      <IconContext.Provider value={{size: "2.5em", className: "social button", color: "black"}}>
      <button><a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/kevin-heleodoro/"><FaLinkedin /></a></button>
      <button><a target="_blank" rel='noopener noreferrer' href='https://github.com/Kevin-Heleodoro'><FaGithub /></a></button>
      <button className='themeSelect' onClick={props.switchTheme}>{themeBtn()}</button>
      <button><a target="_blank" rel='noopener noreferrer' href='https://www.instagram.com/boston_dadbod/'><FaInstagramSquare /></a></button>
      <button><a target="_blank" rel='noopener noreferrer' href='https://twitter.com/Golden_Sun_Kev'><FaTwitterSquare /></a></button>
      </IconContext.Provider>
    </footer>
  )
}