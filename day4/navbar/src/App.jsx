
import './App.css'
 let user="Sowmya"

function App() {
  

  return (
    <>
    <div>
      <ul className='navbar'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
    </div>
    <div className="content">
        <h3>Hello, {user}! </h3>
        <p>Welcome to the React world. Here are some topics you’ll learn:</p>

      </div>
      </>
  )
}

export default App
