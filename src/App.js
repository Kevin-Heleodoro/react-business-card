import './App.css';
import ProfilePhoto from './components/Profile-Photo';
import Header from './components/Header';
import MainContent from './components/Main-Content';
import Footer from './components/Footer';
import useLocalStorage from 'use-local-storage';
// import {FaMoon, FaSun} from 'react-icons/fa';


function App() {
  const defaultLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'light' : 'dark');

  // const themeBtn = () => {
  //   const btn = theme === 'dark' ? <FaSun /> : <FaMoon />;
  //   return btn;
  // }

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }
  

  return (
    <div className='body' data-theme={theme}>
      <ProfilePhoto />
      <Header />
      <MainContent />
      {/* <button className='themeSelect' onClick={switchTheme}>{themeBtn()}</button> */}
      <Footer switchTheme={switchTheme} theme={theme}/>
    </div>
  );
}

export default App;
