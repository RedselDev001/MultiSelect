import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import { Button } from 'reactstrap';
import Model from './components/Model';
import RadioFunction from './components/RadioFunction';

function App() {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen((preState) => !preState)
  }

  //========== main_return_function ===========//
  return (
    <div className="App">
      {/* <Counter />
      <br />
      <Button onClick={toggleOpen} className='mt-5'>Model Btn</Button> */}
      {/* <Model open={open} toggleOpen={toggleOpen} /> */}
      <RadioFunction />
    </div>
  );
}

export default App;
