import {FaEnvelope} from 'react-icons/fa';

export default function Header() {
  return (
    <div className="header">
      <h1>Kevin Heleodoro</h1>
      <h2>Frontend Developer</h2>
      <button className="emailBtn"><a href='mailto:kevin.heleodoro@gmail.com'><FaEnvelope /> Email Me</a></button>
    </div>
  )
}