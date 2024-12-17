import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Button from './components/Button'
import CountMsg from './components/CountMsg'
import ListRick from './components/ListRick'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('rick');

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title title="Hola HAB" />
      <div className="card">
        <Button onClick={handleClick}>
          Aumentar
        </Button>
        <CountMsg count={count} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <input type="text" data-testid="name" value={name} onChange={(e) => setName(e.target.value)} />
      <h3>{name}</h3>
      <ListRick name={name} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
