import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to SaaS Builder 1</h1>
      <a href="https://auth.saasbuilder1.com">
        <button style={{ backgroundColor: 'gray' }}>Sign up now</button>
      </a>
    </div>
  )
}

export default App
