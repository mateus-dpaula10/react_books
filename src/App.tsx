import './App.css'
import logoImg from './assets/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img 
            src={logoImg} 
            alt="logo"
          />
          <p><strong>Alura</strong> Books</p>
        </div>
      </header>
    </div>
  )
}

export default App
