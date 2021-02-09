
import './App.css';
import Heder from './components/Heder';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Heder />
      <Navbar />
      <Profile />
    </div>
  )

}

export default App;
