import { useState } from 'react'

const IDRT = () => {
    const [theme, setTheme] = useState("light");
    const [counter, setCounter] = useState(0);
  return (
    <div className='max-w-5xl mx-auto mt-10 mb-10 px-8 py-8 flex flex-col gap-8 justify-between rounded-xl shadow-xl'>
      <div>
        <div>
            <button onClick={() => setCounter(counter + 1)}>Increament</button>
            <div><span>{counter}</span></div>
            <button onClick={() => setCounter(counter - 1)}>Decreament</button>
        </div>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default IDRT
