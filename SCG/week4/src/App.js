import './App.css';
import {useContext, useState} from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value ={{isDark, setIsDark}}>
      <Page/>
    </ThemeContext.Provider>
  );
}

function Page(){
  return(
  <div className = "page">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

function Header(){
  const {isDark} = useContext(ThemeContext);
  return( 
    <header
      className='header'
      style={{backgroundColor: isDark ? 'black' : 'lightgray',
      color: isDark ? 'white' : 'black',
    }}
    > 
      <h1>Welcome to SCG!</h1>
    </header>
  );
}

function Content(){
  const {isDark} = useContext(ThemeContext);
  return(
    <div
      className='content'
      style={{backgroundColor: isDark ? 'black' : 'white',
      color: isDark ? 'white' : 'black',
    }}
    >
      <p>SCG에 오신것을 환영합니다</p>
    </div>
  );
}

function Footer(){
  const {isDark, setIsDark} = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return(
    <footer
      className='footer'
      style={{backgroundColor: isDark ? 'black' : 'lightgray',
    }}
    >
      <button className='button' onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  )
}

export default App;
