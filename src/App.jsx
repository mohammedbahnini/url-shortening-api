import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center gap-x-20'>
        <a href="https://vitejs.dev" target="_blank" className='w-56'>
          <img src={viteLogo} className="block w-full" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p className='bg-very-dark-violet text-white py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia odit, temporibus explicabo libero eaque voluptatibus qui ex quae architecto accusantium ea veniam omnis, dignissimos, tenetur soluta praesentium modi similique.</p>
     
    </>
  )
}

export default App
