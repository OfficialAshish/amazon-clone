// import logo from './logo.svg';
import './components/styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/MainSection';

export default function App() {
  return (
    <div className='App-main'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}
