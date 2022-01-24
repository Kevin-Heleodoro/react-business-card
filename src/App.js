import './App.css';
import ProfilePhoto from './components/Profile-Photo';
import Header from './components/Header';
import MainContent from './components/Main-Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className='body'>
      <ProfilePhoto />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
