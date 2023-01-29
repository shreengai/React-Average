
import './App.css';


import { useState } from 'react';




function App() {
    const [first, setFirst] = useState();
    const [two, setTwo] = useState();
    var [avg, setAvg] = useState();

    function calculation(){
      avg = (Number(first) + Number(two))/2;
      setAvg(avg);
 }

  return (
   
        <><div><div className="App">
        
      <div className="head">

        <h4 className="input-group-text" id="">Average of two Number</h4>
      </div>
      <div className='box'>
      <input type="text" className="form-control" aria-label='first' placeholder='Enter X'
        onChange={(event) => {
          setFirst(event.target.value);
        } }
      ></input>


      <input type="text" className="form-control" label='two' placeholder='Enter Y'
        onChange={(event) => {
          setTwo(event.target.value);
        } }
      ></input>
      </div>
      
    </div>
    <div className='block'><button type='submit' onClick={calculation} className='btn'>submit</button></div>
    
    
    
    <div className='box' ><input type="text" className="identity" value={ avg }></input></div>
    </div>
    </>
          
        
  );
}

export default App;


