
import './App.css';
import Lottie from 'lottie-react';
import animationData from './Assets/train.json'


function App() {
  return (
    <div className="body">
      
      
    <div className="App">
      
       
        
      
     
      
      
      <main>
      <div class="container">
      <Lottie animationData={animationData}/>
      <div class="top-left">
        
      </div>
    
      </div>
      <div>
      <form>
      <input type="text" />
      <button type="submit" >
        <img className='hell' src='./transparent.png' alt="Snow"/>
      </button> 
      </form>
      
      </div>
    </main>
   

     
      

    </div>
    
    </div>
  );
}


export default App;
