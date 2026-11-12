import { useState } from 'react'

const IDRT = () => {
    const [theme, setTheme] = useState("light");
    const [counter, setCounter] = useState(0);
    const themeStyles = theme === "light" ? {
        backgroundColor: "#f5f5f5",
        color: "#333",
    } : {
        backgroundColor: "#333",
        color: "#f5f5f5",
    };
  return (
    <div style={themeStyles} className='max-w-5xl mx-auto mt-10 mb-10 px-8 py-8 flex flex-col gap-8 justify-between rounded-xl shadow-xl transition-colors duration-300'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl'>Counter & Theme Changer</h1>
        <p className='text-xl'>This is a counter and theme changer</p>
      </div>

      <div>
        <div className='flex justify-center items-center gap-6'>
            <button onClick={() => setCounter(counter + 1)} className='bg-red-600 text-white py-2 px-4 rounded-2xl tracking-widest text-bold hover:bg-red-700'>Increament</button>
            <div className='p-12 rounded-full w-32 h-32 flex justify-center items-center border'><span className='text-5xl font-bold'>{counter}</span></div>
            <button onClick={() => setCounter(counter - 1)} className='bg-blue-600 text-white py-2 px-4 rounded-2xl tracking-widest text-bold hover:bg-blue-700'>Decreament</button>
        </div>
        <div className='flex justify-center items-center gap-4 mt-6'>
          <button onClick={() => setCounter(0)} className='bg-green-600 text-white py-2 px-4 rounded-2xl tracking-widest text-bold hover:bg-green-700'>Reset</button>
        </div>
        
      </div>

      <div className='flex justify-center items-center'>
        <button
          onClick={() => setTheme(currentTheme => currentTheme === "light" ? "dark" : "light")}
          aria-pressed={theme === "dark"}
          className='bg-orange-500 text-white py-2 px-4 rounded-2xl tracking-widest text-bold hover:bg-orange-600'
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  )
}

export default IDRT
