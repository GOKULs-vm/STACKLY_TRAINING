import React from 'react'

const ListRen = () => {
    const users = [
        { id: 1, name: 'John', age: 30, city: 'New York', email: 'john@example.com', role: 'admin' },
        { id: 2, name: 'Jane', age: 25, city: 'Los Angeles', email: 'jane@example.com', role: 'user' },
        { id: 3, name: 'Bob', age: 35, city: 'Chicago', email: 'bob@example.com', role: 'developer' },
        { id: 4, name: 'Alice', age: 28, city: 'San Francisco', email: 'alice@example.com', role: 'manager' },
        { id: 5, name: 'Tom', age: 40, city: 'Seattle', email: 'tom@example.com', role: 'guest' }
    ]
  return (
    <div className='space-y-6 '>
      <h2 className='text-xl'>List Rendering in Action...</h2>
      <div className='flex flex-wrap gap-6 justify-center'>
        {
        users.map((user) => (
            <div key={user.id} className='max-w-3xl flex flex-col gap-8 border border-green-900 p-4 rounded-lg shadow-lg'>
                <div className='flex gap-2 items-center justify-center border-b border-slate-700 pb-2'>
                  <span className='text-lg text-red-900 border border-green-900 rounded-2xl text-center p-0.5 w-8 h-8'>{user.id}</span>
                  <h3 className='text-xl text-center text-green-900 font-bold tracking-widest'>{user.name}</h3>
                </div>

                <div className='flex flex-col max-w-md gap-2 justify-center'>
                  <div className='flex gap-3'>
                    <p className='text-slate-700 text-center text-md leading-relaxed tracking-wide'>Age:</p>
                    <span >{user.age}</span>
                  </div>
                  <div className='flex gap-3'>
                    <p className='text-slate-700 text-center text-md leading-relaxed tracking-wide'>City:</p>
                    <span>{user.city}</span>
                  </div>
                  <div className='flex gap-3'>
                    <p className='text-slate-700 text-center text-md leading-relaxed tracking-wide'>Email:</p>
                    <span>{user.email}</span>
                  </div>
                  <div className='flex gap-3'>
                    <p className='text-slate-700 text-center text-md leading-relaxed tracking-wide'>Role:</p>
                    <span>{user.role}</span>
                  </div>
                </div>
                
            </div>
            
        ))
      }
      </div>
      
    </div>
  )
}

export default ListRen
