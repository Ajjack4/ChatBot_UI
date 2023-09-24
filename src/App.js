
import './App.css';
import Lottie from 'lottie-react';
import animationData from './Assets/train.json';
import sent from './Assets/transparent.png'

function App() {
  return (
    <div className="body">
      
      
    <div className="App">
      
       
        
      
     
    
    <main>
    <div class="container">
    
    <Lottie animationData={animationData} className='svg' >
    
      
    </Lottie>
      
      
      
        <div className='bubble right'>
         Hi,how can i help you?
        </div>
      
      
      <div>
      <form>
      <input type="text" />
      <button type="submit" >
        <img className='hell' src={sent} alt="Snow"/>
      </button> 
      </form>
      
      </div>
      </div>
      
    </main>
   
    
     
      

    </div>
    
    </div>
  );
}


export default App;
