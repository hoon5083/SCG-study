import './App.css';
import { useStore } from './Store/Store.js';

function App() {
  return (
    <div>
      <GrandParent/>
    </div>
  );
}
function GrandParent(){
  return (
    <div>
      <ParentA/>
      <ParentB/>
    </div>
  );
}
function ParentA(){
  return(
    <But/>
  );
}

function ParentB(){
  return(
    <Cnt/>
  );
}

function But(){
  const { increaseCount, decreaseCount } = useStore();
  return (
    <div className='App'>
      <button onClick={increaseCount}>+1</button>
      <button onClick={decreaseCount}>-1</button>
    </div>
  );
}

function Cnt(){
  const { count } = useStore();
  return (
    <div className='App'>
      <div>Count :  {count}</div>
    </div>
  );
}

export default App;
