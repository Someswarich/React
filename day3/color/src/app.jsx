import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFD700']; 
  const [selectedColor, setSelectedColor] = useState(colors[0]);
   function changeColor(){
      for (i of colors){
        if (selectedColor==i ){
          const currentIndex = colors.indexOf(i);
          const nextIndex = (currentIndex + 1) % colors.length;
          setSelectedColor(colors[nextIndex]);
          
        }
      }

     }

  return (
    
       
      <div class="card">
        <h2>Current Color: {selectedColor}</h2>
        <button onClick={() => setSelectedColor(() => selectedColor)}>
          Choose Color
        </button>
        
      </div>
     
    
  )
}
