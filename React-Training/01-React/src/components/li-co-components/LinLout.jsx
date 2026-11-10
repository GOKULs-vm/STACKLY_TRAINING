import ListRen from './ListRen'

const LinLout = ({ isLoggedIn }) => {
    const handleLogin = () => {
        isLoggedIn = true;
      };

    const handleLogout = () => {
        isLoggedIn = false;
      } 
        
  return (
    <div className='max-w-5xl mx-auto mt-10 mb-10 px-8 py-8 flex flex-col gap-8 justify-between rounded-xl shadow-lg'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl text-center text-red-900 font-bold tracking-widest'>List & Conditional Rendering</h1>
        {
            !isLoggedIn ? <p className='text-stone-900 text-center text-md leading-relaxed tracking-wide'>Please click the Login Button to see the 
            Conditional Rendering and List Rendering in action.</p> : <p className='text-stone-900 text-center text-md leading-relaxed 
            tracking-wide'>Please click the Logout Button to see the Conditional Rendering</p>
        }
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
            strokeLinecap="round" strokeLinejoin="round"> <path d="M12 -2 L12 19" /><path d="m19 12-7 7-7-7" />
        </svg>
        {
            !isLoggedIn ? <button onClick={handleLogin} className='bg-green-900 hover:bg-green-700 text-stone-200 font-bold py-2 px-4 rounded-full'>Login
            </button> : <button onClick={handleLogout} className='bg-red-900 hover:bg-red-700 text-stone-200 font-bold py-2 px-4 rounded-full'>Logout</button>
        }
      </div>
      {
        isLoggedIn && <ListRen />
      }
      
    </div>
  )
}

export default LinLout
