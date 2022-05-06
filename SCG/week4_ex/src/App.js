import './App.css';
import {useState} from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  return <Page isDark={isDark} setIsDark={setIsDark}/>;
}

function Page(props){
  return(
  <div classname = "page">
      <Header isDark={props.isDark}/>
      <Content isDark={props.isDark}/>
      <Footer isDark={props.isDark} setIsDark={props.setIsDark}/>
    </div>
  );
}

function Header(props){
  return(
    <header
      className='header'
      style={{backgroundColor: props.isDark ? 'black' : 'lightgray',
      color: props.isDark ? 'white' : 'black',
    }}
    >
      <h1>Welcome to SCG!</h1>
    </header>
  );
}

function Content(props){
  return(
    <div
      className='content'
      style={{backgroundColor: props.isDark ? 'black' : 'white',
      color: props.isDark ? 'white' : 'black',
    }}
    >
      <p>SCG에 오신것을 환영합니다</p>
    </div>
  );
}

function Footer(props){
  const toggleTheme = () => {
    props.setIsDark(!props.isDark);
  };
  return(
    <footer
      className='footer'
      style={{backgroundColor: props.isDark ? 'black' : 'lightgray',
    }}
    >
      <button className='button' onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  )
}

export default App;
