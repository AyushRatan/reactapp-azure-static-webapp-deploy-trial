import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [names, setName] = useState([])


  // useEffect(()=>{
  //   async function get_names(){
  //     const response = await fetch("http://localhost:8000/api/names")
  //     const result = await response.json()

  //     setName(result.names)

  //   }
  //   get_names()
  // },[])

  console.log(names)

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <table>
          <tr>
            <td>Name</td>
          </tr>
          {names.map((name)=><tr><td>{name}</td></tr>)}
        </table>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
