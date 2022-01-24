import { FaLinkedin, FaGithub, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

export default function Footer(){

  return (
    <footer>
      <IconContext.Provider value={{size: "2.5em", className: "social button", color: "black"}}>
      <button><a target="_blank" href="https://www.linkedin.com/in/kevin-heleodoro/"><FaLinkedin /></a></button>
      <button><a target="_blank" href='https://github.com/Kevin-Heleodoro'><FaGithub /></a></button>
      <button><a target="_blank" href='https://www.instagram.com/boston_dadbod/'><FaInstagramSquare /></a></button>
      <button><a target="_blank" href='https://twitter.com/Golden_Sun_Kev'><FaTwitterSquare /></a></button>
      </IconContext.Provider>
    </footer>
  )
}